from flask_socketio import SocketIO, emit
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

@socketio.on('connect')
def test_connect(auth):
    print('connected')
    emit('my response', {'data': 'Connected'})

def process_message(json_data):
    message = json.loads(json_data)
    print(message)

@socketio.on('message')
def receive_message(data):
    process_message(data)
    # socketio.emit('response')
