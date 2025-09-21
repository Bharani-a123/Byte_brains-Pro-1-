from fastapi import APIRouter, Depends, Form, HTTPException, status, File, UploadFile
from app.services.firebase_service import save_profile, get_profile
from app.utils import verify_token  # from utils.py
from app.firebase import bucket, db  # from firebase.py
import logging
from datetime import datetime
import uuid

router = APIRouter()
logger = logging.getLogger("uvicorn")

@router.post("/profile")
async def update_profile(
    name: str = Form(...),
    additional_email: str = Form(None),
    phone: str = Form(None),
    mobile: str = Form(None),
    address: str = Form(None),
    craft_category: str = Form(None),
    language_prefs: str = Form(None),
    location: str = Form(None),
    file: UploadFile = File(None),
    decoded_token: dict = Depends(verify_token)
):
    logger.info(f"Decoded token: {decoded_token}")

    uid = decoded_token.get("uid")
    if not uid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token: UID not found"
        )

    profile_data = {
        "name": name,
        "additional_email": additional_email,
        "phone": phone,
        "mobile": mobile,
        "address": address,
        "craft_category": craft_category,
        "language_prefs": [s.strip() for s in language_prefs.split(",")] if language_prefs else [],
        "location": location,
        "primary_email": decoded_token.get("email"),
    }

    # Handle image upload if provided
    if file:
        unique_filename = f"{uuid.uuid4()}_{file.filename}"
        blob = bucket.blob(f"profile_pictures/{uid}/{unique_filename}")
        blob.upload_from_file(file.file, content_type=file.content_type)
        blob.make_public()
        profile_data["profile_picture_url"] = blob.public_url

    # Manage timestamps
    now = datetime.utcnow()
    existing_profile = get_profile(uid)
    if existing_profile:
        profile_data["created_at"] = existing_profile.get("created_at") or now
    else:
        profile_data["created_at"] = now
    profile_data["updated_at"] = now

    try:
        save_profile(uid, profile_data)
        return {"message": "Profile saved", "profile": profile_data}
    except Exception as e:
        logger.error(f"Error saving profile for uid={uid}: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error saving profile"
        )

@router.post("/profile-picture")
async def upload_profile_picture(
    file: UploadFile = File(...),
    decoded_token: dict = Depends(verify_token)
):
    uid = decoded_token.get("uid")
    if not uid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token: UID not found")

    try:
        unique_filename = f"{uuid.uuid4()}_{file.filename}"
        blob = bucket.blob(f"profile_pictures/{uid}/{unique_filename}")
        blob.upload_from_file(file.file, content_type=file.content_type)
        blob.make_public()
        return {"profile_picture_url": blob.public_url}
    except Exception as e:
        logger.error(f"Error uploading profile picture for uid={uid}: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error uploading picture")
@router.delete("/account")
async def delete_account(decoded_token: dict = Depends(verify_token)):
    uid = decoded_token.get("uid")
    if not uid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token: UID not found")
    try:
        # Delete user authentication record from Firebase Auth
        from firebase_admin import auth as firebase_auth
        firebase_auth.delete_user(uid)

        # Delete user profile data from Firestore
        db.collection("profiles").document(uid).delete()

        return {"message": "Account deleted successfully"}
    except Exception as e:
        logger.error(f"Error deleting account for uid={uid}: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error deleting account")
@router.get("/profile")
async def get_profile_endpoint(decoded_token: dict = Depends(verify_token)):
    uid = decoded_token.get("uid")
    if not uid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token: UID not found")
    profile = get_profile(uid)
    if not profile:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Profile not found")
    return profile
