from flask import Blueprint, request
from app.models import Set, db
from app.forms import SetForm
from flask_login import current_user

set_routes = Blueprint('sets', __name__)

@set_routes.route('/', methods=['POST'])
def create_set():
    """
    Creates a new set in db.
    """
    pass

@set_routes.route('/<int:id>')
def get_set(id):
    """
    Get a set in db by id.
    """
    set = Set.query.get(id)
    return set.to_dict()

@set_routes.route('/<int:id>', methods=['PUT'])
def update_set(id):
    """
    Update a set in db.
    """
    pass

@set_routes.route('/<int:id>', methods=['DELETE'])
def delete_set(id):
    """
    Deletes a set in db.
    """
    pass
