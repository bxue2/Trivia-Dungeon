from flask import Blueprint, request
from app.models import Set, db, set_questions, Question
from app.forms import SetForm
from flask_login import current_user

set_routes = Blueprint('sets', __name__)

@set_routes.route('/', methods=['POST'])
def create_set():
    """
    Creates a new set in db.
    """
    form = SetForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        set = Set(
            name = form.data['name'],
            user_id = current_user.to_dict()['id']
        )
        db.session.add(set)
        db.session.commit()
        return set.to_dict()
    return {'errors': form.errors}, 401

@set_routes.route('/<int:id>')
def get_set(id):
    """
    Get a set in db by id.
    """
    set = Set.query.get(id)
    return set.to_dict()

@set_routes.route('/user/<int:userid>')
def get_set_by_user(userid):
    """
    Get a set in db by id. Optional query to check for question
    """
    args = request.args
    sets = Set.query.filter(Set.user_id == userid)
    return {"sets": [ set.to_dict_qid(args.get('qid')) if args.get('qid') else set.to_dict() for set in sets]}

@set_routes.route('/<int:id>', methods=['PUT'])
def update_set(id):
    """
    Update a set in db.
    """
    form = SetForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        set = Set.query.get(id)
        for key in form.data:
            value = form.data[key]
            setattr(set, key, value)
        db.session.commit()
        return set.to_dict()
    return {'errors': form.errors}, 401

@set_routes.route('/<int:id>', methods=['DELETE'])
def delete_set(id):
    """
    Deletes a set in db.
    """
    set = Set.query.get(id)
    db.session.delete(set)
    db.session.commit()
    return set.to_dict()

@set_routes.route('/<int:sid>/question/<int:qid>', methods=['POST'])
def add_q_to_set(sid, qid):
    """
    Adds a question to the set
    """
    addsq = set_questions.insert().values(set_id=sid, question_id=qid)
    db.session.execute(addsq)
    db.session.commit()
    return {'success': True}, 200

@set_routes.route('/<int:sid>/question/<int:qid>', methods=['DELETE'])
def remove_q_from_set(sid, qid):
    """
    Removes a question from the set
    """
    currset = Set.query.get(sid)
    currq = Question.query.get(qid)
    currset.questions.remove(currq)
    db.session.commit()
    return {'success': True}, 200
