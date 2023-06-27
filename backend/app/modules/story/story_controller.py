# story_controller.py
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.modules.story.story_service import StoryService

story_blueprint = Blueprint('story', __name__)
story_service = StoryService()

@story_blueprint.route('/generate_story', methods=['POST'])
@login_required
def generate_story():
    user_id = current_user.id
    prompt = request.json.get('prompt')
    StoryService.generate_story(user_id, prompt)
    return {"message": "Story generated successfully"}, 200
