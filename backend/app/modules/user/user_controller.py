from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.modules.user.user_model import User
from flask_cors import cross_origin
from app.modules.auth.auth_middleware import token_required  # Import your decorator
# import sys

user_blueprint = Blueprint('user', __name__, url_prefix='/user')

@user_blueprint.route('/profile')
@token_required  # Use the decorator here
def get_profile(current_user):  # Add current_user as an argument
    # No need to query for the user as you're already getting it from the decorator

    return jsonify({
        'id': current_user.id,
        'user_type': str(current_user.user_type),
        'first_name': current_user.first_name,
        'last_name': current_user.last_name,
        'email': current_user.email,
        'profile_image': current_user.profile_image,
        'study_progress': current_user.study_progress,
        'vocabularies_studied': current_user.vocabularies_studied,
        'stories_read': current_user.stories_read,
        'stories_shared': current_user.stories_shared,
        'tokens_available': current_user.tokens_available,
        'knowledge_power': current_user.knowledge_power,
        'energy_power': current_user.energy_power,
    })