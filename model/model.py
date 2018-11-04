import cv2

from model.temperature import calc_image_temperature #acoustiness
from model.vibrance import calc_vibrance # danceability
from model.chaoticness import calc_chaos # energy
from model.popularity import calc_popularity # speechiness
from model.valence import calc_valence # valence
from model.image_utils import bytes_to_rgb

MAX_WIDTH = 250

def calculate_image_vector(image_bytes, concepts):
    import sys
    print('here1')
    sys.stdout.flush()
    image_arr = bytes_to_rgb(image_bytes)
    scale = 1
    if image_arr.shape[0] > MAX_WIDTH:
        scale = MAX_WIDTH / image_arr.shape[0]
    image_arr = cv2.resize(image_array, (0, 0), fx=scale, fy=scale)

    print('here2')
    sys.stdout.flush()
    temperature = calc_image_temperature(image_arr)
    print('here3')
    sys.stdout.flush()
    vibrance = calc_vibrance(image_arr)
    print('here4')
    sys.stdout.flush()
    chaos = calc_chaos(concepts)
    print('here5')
    sys.stdout.flush()
    popularity = calc_popularity(concepts)
    print('here6')
    sys.stdout.flush()
    valence = calc_valence(image_arr, concepts)
    return (temperature, vibrance, chaos, popularity, valence)