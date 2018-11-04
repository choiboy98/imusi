from model.temperature import calc_image_temperature #acoustiness
from model.vibrance import calc_vibrance # danceability
from model.chaoticness import calc_chaos # energy
from model.popularity import calc_popularity # speechiness
from model.valence import calc_valence # valence
from model.image_utils import bytes_to_rgb

def calculate_image_vector(image_bytes, concepts):
    image_arr = bytes_to_rgb(image_bytes)
    temperature = calc_image_temperature(image_arr)
    vibrance = calc_vibrance(image_arr)
    chaos = calc_chaos(concepts)
    popularity = calc_popularity(concepts)
    valence = calc_valence(image_arr, concepts)
    return (temperature, vibrance, chaos, popularity, valence)