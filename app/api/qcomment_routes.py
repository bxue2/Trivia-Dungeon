from flask import Blueprint, request
from app.models import QuestionComment, db
from app.forms import QCommentForm
from flask_login import current_user

comment_routes = Blueprint('question_comments', __name__)

@comment_routes.route('/', methods=['POST'])
def create_qcomment():
    """
    Creates a new comment in db.
    """
    pass

@comment_routes.route('/<questionid>')
def get_qcomment(questionid):
    """
    Get all comment for a question by the question's id.
    """
    qcomment = QuestionComment.query.get(id)
    return qcomment.to_dict()

@comment_routes.route('/<id>', methods=['PUT'])
def update_qcomment(id):
    """
    Update a comment in db.
    """
    pass

@comment_routes.route('/<id>', methods=['DELETE'])
def delete_qcomment(id):
    """
    Deletes a comment in db.
    """
    qcomment = QuestionComment.query.get(id)
    db.session.delete(qcomment)
    db.session.commit()
    return qcomment.to_dict()
