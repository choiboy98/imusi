def get_image(image_bytes, image_size):
	image = Image.fromstring('RGB', (image_size[0], image_size[1]), image_bytes)
	return image

