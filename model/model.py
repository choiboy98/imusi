import cv2

from model.temperature import calc_image_temperature # acoustiness
from model.vibrance import calc_vibrance # danceability
from model.chaoticness import calc_chaos # energy
from model.popularity import calc_popularity # speechiness
from model.valence import calc_valence # valence
from model.image_utils import bytes_to_rgb

MAX_WIDTH = 250

def get_scaled_image(image_arr):
    scale = 1
    if image_arr.shape[0] > MAX_WIDTH:
        scale = MAX_WIDTH / image_arr.shape[0]
    return cv2.resize(image_arr, (0, 0), fx=scale, fy=scale)

def calculate_image_vector(image_bytes, concepts):
    image_arr = bytes_to_rgb(image_bytes)
    image_arr = get_scaled_image(image_arr)

    temperature = calc_image_temperature(image_arr)
    vibrance = calc_vibrance(image_arr)
    chaos = calc_chaos(concepts)
    popularity = calc_popularity(concepts)
    valence = calc_valence(image_arr, concepts)
    return (temperature, vibrance, chaos, popularity, valence)