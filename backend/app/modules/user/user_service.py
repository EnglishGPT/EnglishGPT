# backend/app/modules/user/user_service.py
from app.modules.user.user_model import User
import hashlib

# Add any functions to interact with the User model here

class UserService:
    def __init__(self, user):
        self.user = user

    def generate_hashcode(self):
        hash = hashlib.sha1(self.user.email.encode("UTF-8")).hexdigest()[:10]
        return hash
