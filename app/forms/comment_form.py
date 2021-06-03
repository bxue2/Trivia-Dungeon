from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange

class QCommentForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired(), NumberRange(min=1, max=5, message="Rating must be between 1 through 5")])
    question_id = IntegerField('question_id', validators=[DataRequired()])
