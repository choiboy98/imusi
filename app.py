from flask import Flask, request, render_template, url_for, redirect
import json
import logging
import sys
import requests
import base64

from clarifai_utils.clarifai_concepts import get_relevant_concepts
from model.model import calculate_image_vector
from spotify_utils.spotify_utils import get_recommendations

app = Flask(__name__)

@app.route('/', methods=["GET"])
def index():
    return render_template('index.html')

@app.route('/', methods=["POST"])
def login():
    return redirect(url_for('upload_image'))

@app.route('/image/', methods=["GET"])
def upload_image():
    return render_template('upload.html')

@app.route('/handle/', methods=["POST"])
def handle_image():
    if 'file' not in request.files:
        return redirect(url_for('upload_image'))

    file = request.files['file']
    if file.filename == '':
        return redirect(url_for('upload_image'))

    img_str = base64.b64encode(file.stream.read())
    tracks = get_songs(img_str)
    return render_template('results.html', tracks=tracks)

@app.route('/image/', methods=["POST"])
def post_image():
    image_bytes = request.form['bytes'].encode()
    tracks = get_songs(image_bytes)
    return json.dumps(tracks)

def get_songs(image_bytes):
    concepts = get_relevant_concepts(image_bytes)
    feature_vector = calculate_image_vector(image_bytes, concepts)
    songs = get_recommendations(*feature_vector)
    return songs

if __name__ == '__main__':
    app.logger.addHandler(logging.StreamHandler(sys.stdout))
    app.logger.setLevel(logging.ERROR)
    app.run(debug=True, threaded=True)
