from app.utils.db import db

class Story(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    chapters = db.relationship('Chapter', backref='story', lazy=True)

class Chapter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'))
    translations = db.relationship('Translation', backref='chapter', lazy=True)
    figures = db.relationship('Figure', backref='chapter', lazy=True)

class Translation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    english_text = db.Column(db.String(255))
    chinese_text = db.Column(db.String(255))
    chapter_id = db.Column(db.Integer, db.ForeignKey('chapter.id'))

class Vocabulary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(255))
    translation = db.Column(db.String(255))
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'))

class Knowledge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    info = db.Column(db.Text)
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'))

class Figure(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255))
    page_number = db.Column(db.Integer)
    chapter_id = db.Column(db.Integer, db.ForeignKey('chapter.id'))
