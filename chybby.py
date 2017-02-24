from __future__ import (
    absolute_import,
    print_function,
)

import json

from flask import (
    Flask,
    g,
    render_template,
    send_from_directory,
)
import flask_assetrev

app = Flask(__name__)
app.config.from_object('config')
flask_assetrev.AssetRev(app)

def after_this_request(f):
    if not hasattr(g, 'after_request_callbacks'):
        g.after_request_callbacks = []
    g.after_request_callbacks.append(f)
    return f


@app.route('/', methods=['GET'])
def homepage():
    @after_this_request
    def add_header(response):
        response.cache_control.no_store = True
        return response

    return render_template('homepage.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static/favicon'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.after_request
def call_after_request_callbacks(response):
    for callback in getattr(g, 'after_request_callbacks', ()):
        callback(response)

    if not response.cache_control:
        response.cache_control.public = True
        response.cache_control.max_age = 1800

    return response


if __name__ == '__main__':
    app.run()
