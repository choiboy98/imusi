from flask import Flask, jsonify, request
from api.core import create_response, serialize_list, logger
from image.image_manipulation import get_image

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/image", methods=["POST"])
def push_image():
	image_json = request.get_json()
	image = get_image(image_json['image_bytes'], image_json['image_size'])

