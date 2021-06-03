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
    form = QCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        qcomment = QuestionComment(
            comment = form.data['comment'],
            rating = form.data['rating'],
            # user_id = 2,  #for testing
            user_id = current_user.to_dict()['id'],
            question_id = form.data['question_id']
        )
        db.session.add(qcomment)
        db.session.commit()
        return qcomment.to_dict()
    return {'errors': form.errors}, 401

@comment_routes.route('/<int:questionid>')
def get_qcomment(questionid):
    """
    Get all comment for a question by the question's id.
    """
    qcomments = QuestionComment.query.filter(QuestionComment.question_id == questionid).order_by(QuestionComment.updated_at).all()
    return {"qcomments": [qcomment.to_dict() for qcomment in qcomments]}

# {"comment": "test comment", "rating": 3, "question_id": 1}

@comment_routes.route('/<int:id>', methods=['PUT'])
def update_qcomment(id):
    """
    Update a comment in db.
    """
    form = QCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        qcomment = QuestionComment.query.get(id)
        print(form.data)
        for key in form.data:
            value = form.data[key]
            setattr(qcomment, key, value)
        db.session.commit()
        return qcomment.to_dict()
    return {'errors': form.errors}, 401

@comment_routes.route('/<int:id>', methods=['DELETE'])
def delete_qcomment(id):
    """
    Deletes a comment in db.
    """
    qcomment = QuestionComment.query.get(id)
    db.session.delete(qcomment)
    db.session.commit()
    return qcomment.to_dict()
