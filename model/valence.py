from model.sentiment import calc_image_sentiment
from model.brightness import calc_brightness

def calc_valence(image_arr, concepts):
    b = calc_brightness(image_arr)
    s = calc_image_sentiment(concepts)

    return (b + s) / 2