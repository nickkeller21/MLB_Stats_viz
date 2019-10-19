import os

import pandas as pd
import numpy as np
from pymongo import MongoClient

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)


#################################################
# Database Setup
#################################################

client = MongoClient('mongodb://nick21:Nick21**@ds335678.mlab.com:35678/heroku_s4gpc8qj')
db = client.heroku_s4gpc8qj
collection = db.collection

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/about")
def about():
    """Return the about."""
    return render_template("about.html")

@app.route("/names")
def names():
    """Return a list of player names."""
    names = [i['playerName'] for i in collection.find()]
    return jsonify(names)

@app.route("/pic_url/<player>")
def pic_url(player):
    """Return a photo url of the player."""
    picture = collection.find({'playerName':player})[0]['imgURL']
    return jsonify(picture)


@app.route("/stats/<player>")
def stats(player):
    """Create a dictionary entry for each row of stats information"""
    #open dict of that player
    ref = collection.find({'playerName':player})[0]
    years = [i for i in ref['years']]
    stats= {}
    if ref['position'] == 'pitcher':
        stats['year'] = [i for i in ref['years']]
        stats['WAR'] = [ref['years'][i]['WAR'] for i in years]
        stats['ERA'] = [ref['years'][i]['ERA'] for i in years]
        stats['WHIP'] = [ref['years'][i]['WHIP'] for i in years]
        stats['W'] = [ref['years'][i]['W'] for i in years]
        stats['SO'] = [ref['years'][i]['SO'] for i in years]
        stats['TEAM'] = [ref['years'][i]['TEAM'] for i in years]
    else:
        stats['year'] = [i for i in ref['years']]
        stats['WAR'] = [ref['years'][i]['WAR'] for i in years]
        stats['AVG'] = [ref['years'][i]['AVG'] for i in years]
        stats['OPS'] = [ref['years'][i]['OPS'] for i in years]
        stats['HR'] = [ref['years'][i]['HR'] for i in years]
        stats['RBI'] = [ref['years'][i]['RBI'] for i in years]
        stats['TEAM'] = [ref['years'][i]['TEAM'] for i in years]
    return jsonify(stats)


if __name__ == "__main__":
    app.config['JSON_SORT_KEYS'] = False
    app.run(port=5001)
