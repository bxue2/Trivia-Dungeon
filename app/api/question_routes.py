from flask import Blueprint, request
from app.models import Question, db
from app.forms import QuestionForm
from flask_login import current_user

question_routes = Blueprint('questions', __name__)

@question_routes.route('/', methods=['POST'])
def create_question():
    """
    Creates a new question in db.
    """
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        incorrect_answers_list = [form.data['incorrect_answer_1']]
        if(form.data['incorrect_answer_2']):
            incorrect_answers_list.append(form.data['incorrect_answer_2'])
        if(form.data['incorrect_answer_3']):
            incorrect_answers_list.append(form.data['incorrect_answer_3'])
        question = Question(
            question = form.data['question'],
            answer = form.data['answer'],
            incorrect_answers = incorrect_answers_list,
            difficulty = form.data['difficulty'],
            user_id = 1,  #for testing
            # user_id = current_user.to_dict()['id'],
            category_id = form.data['category_id']
        )
        db.session.add(question)
        db.session.commit()
        return question.to_dict()
    return {'errors': form.errors}, 401

@question_routes.route('/<id>')
def get_question(id):
    """
    Gets specified question with id.
    """
    question = Question.query.get(id)
    return question.to_dict()

#Unfinished
@question_routes.route('/<id>', methods=['PUT'])
def edit_question(id):
    """
    Edits specified question with id.
    """
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        question = Question.query.get(id)
        incorrect_answers = question.incorrect_answers
        print(form.data)
        for key in form.data:
            print("key: " + key)
            value = form.data[key]
            print("value: " + value)
            if key == 'incorrect_answer_1':
                incorrect_answers[0] == value
            elif key == 'incorrect_answer_2':
                incorrect_answers[1] == value
            elif key == 'incorrect_answer_3':
                incorrect_answers[2] == value
            else:
                setattr(question, key, value)

        setattr(question, 'incorrect_answers', incorrect_answers)
        db.session.commit()

    return question.to_dict()

@question_routes.route('/<id>', methods=['DELETE'])
def delete_question(id):
    """
    Deletes specified question with id.
    """
    question = Question.query.get(id)
    db.session.delete(question)
    db.session.commit()
    return question.to_dict()
