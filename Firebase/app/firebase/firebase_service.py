from app.firebase import db
import logging
from datetime import datetime

logger = logging.getLogger("uvicorn")


def save_profile(uid: str, profile_data: dict):
    """
    Save or update the user profile document in Firestore.
    Automatically updates 'updated_at' timestamp.
    """
    try:
        profile_data["updated_at"] = datetime.utcnow()
        doc_ref = db.collection("profiles").document(uid)
        doc_ref.set(profile_data)
        logger.info(f"Profile saved for uid={uid}")
    except Exception as e:
        logger.error(f"Firestore save error: {e}")
        raise


def get_profile(uid: str):
    """
    Fetch the user profile document from Firestore.
    Returns dict if found, else None.
    """
    try:
        doc_ref = db.collection("profiles").document(uid)
        doc = doc_ref.get()
        if doc.exists:
            return doc.to_dict()
        return None
    except Exception as e:
        logger.error(f"Firestore get error: {e}")
        raise
