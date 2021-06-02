from app.seeds.qcomments import undo_qcomments
from app.seeds.sets import seed_sets
from app.seeds.questions import seed_questions
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .questions import seed_questions, undo_questions
from .qcomments import seed_qcomments, undo_qcomments
from .sets import seed_sets, undo_sets

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_questions()
    seed_qcomments()
    seed_sets()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_questions()
    undo_qcomments()
    undo_sets()
    # Add other undo functions here
