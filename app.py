from flask import Flask, jsonify, request
from api.core import create_response, serialize_list, logger
from image.image_manipulation import get_image, get_as_base64
from clarifai_utils.tags import get_relevant_tags
from model.model import calculate_image_vector

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

# image bytes as parameter
@app.route('/image', methods=["POST"])
def push_image():
	print("hi")
	#print(request.form)
	# image_bytes = request.form
	#concepts = get_relevant_tags(image_bytes['bytes'])
	print(request.__dir__())# print(len(image_bytes['bytes']))
	#pipe_model(image_bytes['bytes'], concepts)

	return "hi"

def pipe_model(image_bytes, concepts):
	features = calculate_image_vector(image_bytes, concepts)

def pipe_spotify():
	pass

@app.route('/brandon', methods=["GET"])
def push_brandonc():
	return 'Hi'

if __name__ == '__main__':
	app.run(debug=True)