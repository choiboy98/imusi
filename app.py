from flask import Flask, jsonify, request
from api.core import create_response, serialize_list, logger
from image.image_manipulation import get_image, get_as_base64
from clarifai_utils.tags import get_relevant_tags
from model.model import calculate_image_vector
import logging
import sys
import json

app = Flask(__name__)

@app.route('/')
def index():
	return 'Welcome to imusi!'

# image bytes as parameter
@app.route('/image/', methods=["POST"])
def post_image():
	image_bytes = request.form['bytes'].encode()
	concepts = get_relevant_tags(image_bytes)
	feature_vector = calculate_image_vector(image_bytes, concepts)

	return str(feature_vector)

@app.route('/clarifai/', methods=["POST"])
def get_concepts():
	image_bytes = request.form['bytes'].encode()
	concepts = get_relevant_tags(image_bytes)
	return json.dumps(concepts)

if __name__ == '__main__':
	app.logger.addHandler(logging.StreamHandler(sys.stdout))
	app.logger.setLevel(logging.ERROR)
	app.run(debug=True)