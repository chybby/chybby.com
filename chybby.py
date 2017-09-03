'''Adam Chyb's personal website.'''

from __future__ import absolute_import, print_function

import json
import os

import flask_assetrev
from flask import Flask, g, render_template, send_from_directory

app = Flask(__name__)
app.config.from_object('config')
flask_assetrev.AssetRev(app)


def after_this_request(func):
    '''Adds the given function to the current request's callbacks.'''
    if not hasattr(g, 'after_request_callbacks'):
        g.after_request_callbacks = []
    g.after_request_callbacks.append(func)
    return func


@app.route('/', methods=['GET'])
def homepage():
    '''Render the homepage.'''
    @after_this_request
    def add_no_cache_header(response):
        '''Adds a no cache header to the response.'''
        response.cache_control.no_store = True
        return response

    projects = json.load(open('projects.json'))

    return render_template('homepage.html', projects=projects)


@app.route('/favicon.ico')
def favicon():
    '''Delivers the favicon'''
    return send_from_directory(os.path.join(app.root_path, 'static/favicon'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.after_request
def call_after_request_callbacks(response):
    '''Calls the after request callbacks and sets a default caching policy.'''
    for callback in getattr(g, 'after_request_callbacks', ()):
        callback(response)

    if not response.cache_control:
        response.cache_control.public = True
        response.cache_control.max_age = 1800

    return response


if __name__ == '__main__':
    app.run()
