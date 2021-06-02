from .db import db

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key = True)
    question = db.Column(db.String(800), nullable = False, unique = True)
    answer = db.Column(db.String(100), nullable = False)
    incorrect_answers = db.Column(db.String(255), nullable = False)
    user_id = db.Column(db.Integer, nullable = False)
    category_id = db.Column(db.Integer, nullable = False)
