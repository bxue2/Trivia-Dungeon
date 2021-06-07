from flask import Blueprint, request
from app.models import Question, db, Set
from app.forms import QuestionForm
from flask_login import current_user
from sqlalchemy.sql.expression import func
from sqlalchemy.orm import joinedload

question_routes = Blueprint('questions', __name__)

@question_routes.route('/', methods=['POST'])
def create_question():
    """
    Creates a new question in db.
    """
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        question = Question(
            question = form.data['question'],
            answer = form.data['answer'],
            incorrect_answer_1 = form.data.get('incorrect_answer_1'),
            incorrect_answer_2 = form.data.get('incorrect_answer_2'),
            incorrect_answer_3 = form.data.get('incorrect_answer_3'),
            difficulty = form.data['difficulty'],
            # user_id = 1,  #for testing
            user_id = current_user.to_dict()['id'],
            category_id = form.data['category_id']
        )
        db.session.add(question)
        db.session.commit()
        return question.to_dict()
    return {'errors': form.errors}, 401

@question_routes.route('/<int:id>')
def get_question(id):
    """
    Gets specified question with id.
    """
    question = Question.query.get(id)
    if not question:
        return {'errors': "Question not found"}, 401
    return question.to_dict()

@question_routes.route('/random')
def get_random_question():
    """
    Gets up to 30 random questions.
    """
    questions = Question.query.order_by(func.random()).limit(30).all()
    return {"questions": [question.to_dict() for question in questions]}

@question_routes.route('/user/<int:userid>')
def get_user_questions(userid):
    """
    Gets all questions from specified user.
    """
    questions = Question.query.filter(Question.user_id == userid)
    return {"questions": [question.to_dict() for question in questions]}

@question_routes.route('/set/<int:setid>')
def get_set_questions(setid):
    """
    Gets all questions from specified set.
    """
    questions = db.session.query(Question).options(joinedload(Question.sets)).join(Set).filter(Question.set_id == setid)
    return {"questions": [question.to_dict() for question in questions]}

# For testing on Postman
# {"question": "test question", "answer": "answer", "incorrect_answer_1": "in1", "incorrect_answer_2": "in3", "incorrect_answer_3": "in3", "difficulty": 3, "user_id": 1, "category_id": 1}

@question_routes.route('/<int:id>', methods=['PUT'])
def edit_question(id):
    """
    Edits specified question with id.
    """
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        question = Question.query.get(id)
        print(form.data)
        for key in form.data:
            value = form.data[key]
            setattr(question, key, value)
        db.session.commit()
        return question.to_dict()
    return {'errors': form.errors}, 401

@question_routes.route('/<int:id>', methods=['DELETE'])
def delete_question(id):
    """
    Deletes specified question with id.
    """
    question = Question.query.get(id)
    db.session.delete(question)
    db.session.commit()
    return question.to_dict()
