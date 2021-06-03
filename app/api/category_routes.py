from flask import Blueprint, request
from app.models import Category, db

category_routes = Blueprint('categories', __name__)

@category_routes.route('/')
def get_categories():
    """
    Get a list of all categories
    """
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}
