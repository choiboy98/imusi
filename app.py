from clarifai_utils.tags import get_relevant_tags
from flask import Flask, jsonify, request
from image.image_manipulation import get_image, get_as_base64
import json
import logging
import sys

from model.model import calculate_image_vector
from spotify_utils.spotify_utils import get_recommendations

app = Flask(__name__)

@app.route('/')
def index():
	return 'Welcome to imusi!'

# image bytes as parameter
@app.route('/image/', methods=["POST"])
def post_image():
	print('here1')
	sys.stdout.flush()
	image_bytes = request.form['bytes'].encode()
	print('here2')
	sys.stdout.flush()
	concepts = get_relevant_tags(image_bytes)
	print('here3')
	sys.stdout.flush()
	feature_vector = calculate_image_vector(image_bytes, concepts)
	print('here4')
	sys.stdout.flush()
	songs = get_recommendations(*feature_vector)

	return json.dumps(songs)

@app.route('/clarifai/', methods=["POST"])
def get_concepts():
	image_bytes = request.form['bytes'].encode()
	concepts = get_relevant_tags(image_bytes)
	return json.dumps(concepts)

if __name__ == '__main__':
	app.logger.addHandler(logging.StreamHandler(sys.stdout))
	app.logger.setLevel(logging.ERROR)
	app.run(debug=True)
