from flask import Blueprint
from app.models import Question, db
from app.forms import QuestionForm

question_routes = Blueprint('questions', __name__)

@question_routes.route('/', methods=['POST'])
def create_question():
    """
    Creates a new question in db.
    """
    form = QuestionForm
