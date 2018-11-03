from flask import Flask, jsonify, request
from api.core import create_response, serialize_list, logger
from image.image_manipulation import get_image, get_as_base64
from clarifai_utils.tags import get_relevant_tags
from model.model import calculate_image_vector
import logging
import sys

app = Flask(__name__)

@app.route('/')
def hello_world():
	return 'Hello, World!'

# image bytes as parameter
@app.route('/image/', methods=["GET", "POST"])
def push_image():
	concepts = get_relevant_tags(request.form['bytes'])
	#pipe_model(image_bytes['bytes'], concepts)

	return concepts

def pipe_model(image_bytes, concepts):
	features = calculate_image_vector(image_bytes, concepts)

def pipe_spotify():
	pass

@app.route('/brandon', methods=["GET"])
def push_brandonc():
	return 'Hi'

if __name__ == '__main__':
	app.logger.addHandler(logging.StreamHandler(sys.stdout))
	app.logger.setLevel(logging.ERROR)
	app.run(debug=True)