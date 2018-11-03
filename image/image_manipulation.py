import base64, requests

def get_image(image_bytes):
	with open("image.jpg", "wb") as fh:
		fh.write(base64.decodebytes(image_bytes))

def get_as_base64(url):
    return base64.b64encode(requests.get(url).content)
