# exam_controller.py
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.modules.exam.exam_service import ExamService

exam_blueprint = Blueprint('exam', __name__)
exam_service = ExamService()

@exam_blueprint.route('/generate_story_exam', methods=['POST'])
@login_required
def generate_story_exam():
    story_id = request.json.get('story_id')
    exam_id = exam_service.generate_story_exam(story_id)
    return {"message": "Story exam generated successfully", "exam_id": exam_id}, 200

@exam_blueprint.route('/generate_general_exam', methods=['POST'])
@login_required
def generate_general_exam():
    user_id = current_user.id
    exam_id = exam_service.generate_general_exam(user_id)
    return {"message": "General exam generated successfully", "exam_id": exam_id}, 200
