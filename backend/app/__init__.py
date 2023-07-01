from app.modules.user.user_model import User

from app.modules.user import user_blueprint
from app.modules.auth import auth_blueprint
from app.modules.relationship import relationship_blueprint 

# from app.modules.story import story_blueprint
# from app.modules.exam import exam_blueprint

from flask import Flask
from flask_cors import CORS
from .utils.db import db
from flask_login import LoginManager

from loguru import logger
import logging


# Initialize the LoginManager
login_manager = LoginManager()
from sqlalchemy.exc import OperationalError

def populate_users(db):
    """
    Create some placeholder users in the database
    """
    from app.modules.user.user_model import User, UserType
    import random
    import string

    # Define a list of names for our users
    first_names = ["John", "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Harry", "Ivy"]
    last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"]

    user_types = [(UserType.admin, 1), (UserType.teacher, 3), (UserType.parent, 10), (UserType.student, 10)]

    for user_type, count in user_types:
        for i in range(1, count + 1):
            email = f'{user_type.value}{i}@gmail.com'
            password = 'a'  # should be hashed before storing in real-world scenarios
            first_name = random.choice(first_names)
            last_name = random.choice(last_names)
            
            user = User(email, password, user_type)
            user.first_name = first_name
            user.last_name = last_name

            db.session.add(user)
    db.session.commit()

def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_pyfile(config_filename)
    app.secret_key = app.config['SECRET_KEY']
    
    app.logger
    # Allow access from frontend
    # TODO: change when deployed
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.debug = True

    db.init_app(app)

    # Initialize the LoginManager with the app
    login_manager.init_app(app)
    login_manager.login_view = 'auth.signin'  # type: ignore # The name of the view function for the login route

    app.register_blueprint(user_blueprint)
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(relationship_blueprint)
    # app.register_blueprint(story_blueprint)
    # app.register_blueprint(exam_blueprint)

    # Config logger, using loguru instead of default
    logger.start(app.config["LOG_FILE"], level=app.config["LOG_LEVEL"], backtrace=app.config["LOG_BACKTRACE"], rotation="25MB")
    class LogHandler(logging.Handler):
        def emit(self, record):
            opt = logger.opt(depth=6, exception=record.exc_info)
            opt.log(record.levelno, record.getMessage())
    app.logger.addHandler(LogHandler())

    logger.info("App created")

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id)) # Adjust this line to match your User model and method to fetch user by ID

    with app.app_context():
        try:
            db.create_all()
            # Check if there are no users in the DB
            if not User.query.first():
                populate_users(db)
        except OperationalError:
            # Likely no table - ignore for now
            pass

    return app
