from flask_socketio import SocketIO, emit, join_room, leave_room
import os

if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "http://trivia-dungeon.herokuapp.com/",
        "https://trivia-dungeon.herokuapp.com/"
    ]
else:
    origins = "*"

# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)

# Pass in user, their answer, check for answer and time and assign score
@socketio.on('answer')
def handle_answer(json_data):
    data = json.loads(json_data)


#On connection, need to add player to player list
@socketio.on('connect')
def test_connect(auth):
    print('Test connected')
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

def process_message(json_data):
    message = json.loads(json_data)
    print(message)

@socketio.on('message')
def receive_message(data):
    process_message(data)
    # socketio.emit('response')
