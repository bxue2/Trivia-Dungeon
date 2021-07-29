from flask import Blueprint, request

room_routes = Blueprint('question_comments', __name__)

@room_routes.route('/room/<int:roomid>')
def enter_room(roomid):
    pass

