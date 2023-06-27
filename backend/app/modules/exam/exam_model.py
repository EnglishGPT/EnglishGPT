from enum import Enum
from app.utils.db import db

class ExamType(Enum):
    VOCABULARY_RECITE = 1
    COMPLETE_THE_PASSAGE = 2
    READING_COMPREHENSION = 3

class ExamBindingType(Enum):
    STORY_BINDING = 1
    GENERAL = 2

class Exam(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exam_type = db.Column(db.Enum(ExamType), nullable=False)
    binding_type = db.Column(db.Enum(ExamBindingType), nullable=False)
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    questions = db.relationship('Question', backref='exam', lazy=True)

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.String(500), nullable=False)
    options = db.Column(db.ARRAY(db.String(100)), nullable=False)
    correct_option_index = db.Column(db.Integer, nullable=False)
    exam_id = db.Column(db.Integer, db.ForeignKey('exam.id'), nullable=False)
