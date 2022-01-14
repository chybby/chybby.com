'''Adam Chyb's personal website.'''

from __future__ import absolute_import, print_function

import json
import os

from flask import Flask, g, render_template, send_from_directory

from flask_cachecontrol import (
    FlaskCacheControl,
    cache,
    cache_for,
    dont_cache)

from rev_assets import RevAssets

app = Flask(__name__)
app.config.from_object('config')

rev = RevAssets(reload=app.config['DEBUG'], manifest='rev-manifest.json')
app.jinja_env.filters['asset_url'] = rev.asset_url

flask_cache_control = FlaskCacheControl()
flask_cache_control.init_app(app)


@app.route('/', methods=['GET'])
@dont_cache()
def homepage():
    '''Render the homepage.'''

    projects = json.load(open('projects.json'))

    return render_template('homepage.html', projects=projects)


@app.route('/favicon.ico')
@cache(max_age=3600, public=True)
def favicon():
    '''Delivers the favicon'''
    return send_from_directory(os.path.join(app.root_path, 'static/favicon'),
                               'favicon.ico',
                               mimetype='image/vnd.microsoft.icon')


if __name__ == '__main__':
    app.run()
