import os
import logging
import base64
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import vertexai
from google.auth import exceptions as auth_exceptions
from vertexai.vision_models import ImageGenerationModel
from dotenv import load_dotenv
load_dotenv()

# Configure basic logging
logging.basicConfig(level=logging.INFO)

# --- Vertex AI Initialization (once at startup) ---
# Initialize clients and models once at application startup for efficiency.
try:
    # It's best practice to use environment variables for configuration
    # with sensible defaults.
    PROJECT_ID = os.environ.get("GCP_PROJECT", "craftechoai-111")
    LOCATION = os.environ.get("GCP_REGION", "us-central1")

    # For robust authentication, especially in local or non-GCP environments,
    # it's crucial to set the GOOGLE_APPLICATION_CREDENTIALS environment variable.
    # The presence of 'credentials/service-account-key.json' suggests this is intended.
    if "GOOGLE_APPLICATION_CREDENTIALS" not in os.environ:
        logging.warning(
            "GOOGLE_APPLICATION_CREDENTIALS environment variable not set. "
            "Authentication may fail unless you are in a GCP environment with "
            "Application Default Credentials configured."
        )

    vertexai.init(project=PROJECT_ID, location=LOCATION)
    # Using a more recent model version, you might want to check for the latest.
    generation_model = ImageGenerationModel.from_pretrained("imagen-3.0-generate-002")
    logging.info("Vertex AI initialized successfully.")
except auth_exceptions.DefaultCredentialsError:
    logging.error(
        "Authentication failed. Could not find default credentials. Please run "
        "'gcloud auth application-default login' or set the "
        "GOOGLE_APPLICATION_CREDENTIALS environment variable to point to your "
        "service account key file."
    )
    generation_model = None
except Exception as e:
    logging.error(f"An unexpected error occurred during Vertex AI initialization: {e}")
    # If initialization fails, the app can't generate images.
    generation_model = None

app = Flask(__name__)
# Enable CORS to allow frontend requests from different origins (e.g., localhost)
CORS(app)

@app.route("/")
def index():
    """Serves the main HTML page."""
    return render_template("index.html")


@app.route("/generate-image", methods=["POST"])
def generate_image_api():
    """
    API endpoint to generate an image.
    Accepts a JSON POST request with a "prompt".
    Returns a JSON response with the base64-encoded image data.
    """
    if not generation_model:
        return jsonify({"error": "Image generation service is not available."}), 503
    
    # Get prompt from the JSON request body
    data = request.get_json()
    if not data or "prompt" not in data:
        return jsonify({"error": "JSON body with a 'prompt' key is required."}), 400
    
    prompt = data["prompt"]

    try:
        logging.info(f"Generating image for prompt: '{prompt}'")
        response = generation_model.generate_images(
            prompt=prompt,
            number_of_images=1,
            # You can add other parameters here, like aspect_ratio
        )
        image = response.images[0]

        # The image data is returned as PNG bytes by default.
        # We can use the _image_bytes attribute directly.
        # Note: _image_bytes is a private attribute, but it's the most direct
        # way to get the image data without extra processing.
        img_bytes = image._image_bytes

        # Encode the image bytes to a base64 string for the frontend
        img_base64 = base64.b64encode(img_bytes).decode("utf-8")

        return jsonify({"image_data": img_base64})

    except Exception as e:
        logging.error(f"Error during image generation: {e}")
        return jsonify({"error": f"An error occurred: {e}"}), 500

if __name__ == "__main__":
    # Debug mode should be disabled in a production environment.
    # For local development, you can set the FLASK_DEBUG environment variable.
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
