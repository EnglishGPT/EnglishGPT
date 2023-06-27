import os

basedir = os.path.abspath(os.path.dirname(__file__))

# SECRET_KEY configuration
SECRET_KEY = os.environ.get("SECRET_KEY") or "944224814e64cf99520e167762ed9338f6358c53c7429d78"

# SQLALCHEMY_DATABASE_URI configuration
# Replace the placeholders with your actual database credentials
# For example, if you are using PostgreSQL:
# 'postgresql://username:password@localhost/dbname'
# For SQLite (a file-based database), it would look like this:
# 'sqlite:///' + os.path.join(basedir, 'app.db')
SQLALCHEMY_DATABASE_URI = 'postgresql://root:Waipo500503!@localhost/test_db'


# SQLALCHEMY_TRACK_MODIFICATIONS configuration
# Set this to False to disable tracking modifications for SQLAlchemy models
# It helps to save system resources since tracking modifications can be resource-intensive
SQLALCHEMY_TRACK_MODIFICATIONS = False
