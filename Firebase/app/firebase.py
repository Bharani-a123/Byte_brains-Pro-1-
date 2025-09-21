import firebase_admin
from firebase_admin import credentials, firestore, storage
import logging

logger = logging.getLogger("uvicorn")

cred_path = r"C:\Users\BHARANIDHARAN.S\Downloads\firebaseauthentication\craftechoai-111-firebase-adminsdk-fbsvc-a2bc7fbb6f.json"

cred = credentials.Certificate(cred_path)

if not firebase_admin._apps:
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'craftechoai-111.firebasestorage.app'  # Your Firebase Storage bucket name
    })
    logger.info("Firebase SDK initialized")

# Firestore client
db = firestore.client()

# Storage client (needed for file upload)
bucket = storage.bucket()

# Test Firestore connection on startup for debugging
try:
    collections = db.collections()
    logger.info("Firestore connected! Collections:")
    for col in collections:
        logger.info(f"- {col.id}")
except Exception as e:
    logger.error(f"Error connecting to Firestore: {e}")
