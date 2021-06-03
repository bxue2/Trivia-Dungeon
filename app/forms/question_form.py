from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired

class QuestionForm(FlaskForm):
    question = StringField('question', validators=[DataRequired()])
    answer = StringField('answer', validators=[DataRequired()])
    incorrect_answer_1 = StringField('incorrect_answer_1', validators=[DataRequired()])
    incorrect_answer_2 = StringField('incorrect_answer_2')
    incorrect_answer_3 = StringField('incorrect_answer_3')
    difficulty = IntegerField('difficulty', validators=[DataRequired()])
    category = SelectField('category', coerce=int, choices=[(1, 'Science')])
