from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class SetForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    # Collection of questions (array?)
