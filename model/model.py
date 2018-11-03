from temperature import calc_image_temperature
from vibrance import calc_vibrance
from chaoticness import calc_chaos
from popularity import calc_popularity
from valence import calc_valence


def calculate_image_vector(image, concepts):
    image_arr = None
    t = calc_image_temperature(image_arr)
    v = calc_vibrance(image_arr)
    c = calc_chaos(concepts)
    p = calc_popularity(concepts)
    v = calc_valence(image_arr, concepts)
    return (t, v, c, p, v)