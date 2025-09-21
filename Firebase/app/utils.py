from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends, HTTPException, status
from firebase_admin import auth as firebase_auth
import logging

security = HTTPBearer()
logger = logging.getLogger("uvicorn")

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """
    FastAPI dependency to verify Firebase ID token from Authorization header.
    Raises HTTP 401 if token is invalid, revoked, or expired.
    """
    try:
        decoded_token = firebase_auth.verify_id_token(credentials.credentials)
        return decoded_token
    except firebase_auth.RevokedIdTokenError:
        logger.error("Token has been revoked")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token revoked.")
    except firebase_auth.ExpiredIdTokenError:
        logger.error("Token has expired")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expired.")
    except Exception as e:
        logger.error(f"Token verification failed: {e}")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token.")
