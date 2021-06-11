from flask_socketio import emit, join_room, leave_room
from .. import socketio
import json


def process_message(json_data):
    message = json.loads(json_data)
    print(message)

@socketio.on('message')
def receive_message(data):
    process_message(data)
    # socketio.emit('response')
