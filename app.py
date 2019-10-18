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
collections = [i for i in collection.find()]

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/names")
def names():
    """Return a list of sample names."""

    ids = [i for i in collections[0]['espn_id']]
    # Return a list of the Player names
    return jsonify(ids)

@app.route("/pic_url/<id>")
def pic_url(id):
    """Return a photo url of the player."""

    inner_photo = collections[0]['espn_id']
    picture = inner_photo[id]['photo_url']
    # Return a list of the Player names
    return jsonify(picture)

'''
@app.route("/playerbio/<player>")
def bio(player):
    """Return the MetaData for a given sample."""
    
    # Create a dictionary entry for each row of metadata information
    #bio = {}
    for result in results:
        sample_metadata["sample"] = result[0]
        sample_metadata["ETHNICITY"] = result[1]
        sample_metadata["GENDER"] = result[2]
        sample_metadata["AGE"] = result[3]
        sample_metadata["LOCATION"] = result[4]
        sample_metadata["BBTYPE"] = result[5]
        sample_metadata["WFREQ"] = result[6]

    print(sample_metadata)
    return jsonify(sample_metadata)


@app.route("/samples/<sample>")
def samples(sample):
    """Return `otu_ids`, `otu_labels`,and `sample_values`."""

    # Format the data to send as json
    data = {
        "otu_ids": sample_data.otu_id.values.tolist(),
        "sample_values": sample_data[sample].values.tolist(),
        "otu_labels": sample_data.otu_label.tolist(),
    }
    return jsonify(data)

'''
if __name__ == "__main__":
    app.run()
