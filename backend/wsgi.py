from app import create_app
from flask import request
from loguru import logger

app = create_app('../config.py')

@app.before_request
def before_request_handler():
    # Print every request to log
    if request.method == "GET":
        args = request.args
    elif request.method == "POST":
        args = request.form
    else:
        args = {}
    print(2)
    logger.debug(
        f"{request.method} {repr(request.base_url[len(request.url_root)-1:])}{'. args: ' if len(args) else ''}{','.join(f'{k}={repr(v)}' for k, v in args.items())}"
    )

if __name__ == '__main__':
    app.run()
