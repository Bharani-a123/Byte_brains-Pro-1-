from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime


class UserProfile(BaseModel):
    name: str
    primary_email: Optional[EmailStr] = None  # injected from token
    additional_email: Optional[EmailStr] = None
    mobile: Optional[str] = None
    profile_picture_url: Optional[str] = None
    craft_category: Optional[str] = None      # optional if not always provided
    language_prefs: List[str] = []            # default empty list
    location: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
