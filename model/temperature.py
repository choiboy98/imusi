import numpy as np
import imutils
import cv2
import colour
import sys
from scipy.stats import itemfreq

MAX = 10000

def get_dominant_color(img):
    '''
    Source: https://stackoverflow.com/questions/43111029/how-to-find-the-average-colour-of-an-image-in-python-with-opencv
    '''
    arr = np.float32(img)
    pixels = arr.reshape((-1, 3))

    n_colors = 5
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 200, .1)
    flags = cv2.KMEANS_RANDOM_CENTERS
    _, labels, centroids = cv2.kmeans(pixels, n_colors, None, criteria, 10, flags)

    palette = np.uint8(centroids)
    quantized = palette[labels.flatten()]
    quantized = quantized.reshape(img.shape)
    dominant_color = palette[np.argmax(itemfreq(labels)[:, -1])]
    return dominant_color[::-1]

def calc_temperature(dominant_color):
    XYZ = colour.sRGB_to_XYZ(dominant_color / 255)
    uv = colour.UCS_to_uv(colour.XYZ_to_UCS(XYZ))
    temperature = colour.uv_to_CCT_Robertson1968(uv)
    return 1 - (min(temperature[0], MAX) / MAX)

def calc_image_temperature(image_array):
    smaller_image = cv2.resize(image_array, (0, 0), fx=0.5, fy=0.5)
    dominant = get_dominant_color(smaller_image)
    temperature = calc_temperature(dominant)
    return temperature

if __name__ == '__main__':
    imagePath = sys.argv[1]
    print('Calculating Temperature of {}.'.format(imagePath))
    image = cv2.imread(imagePath)
    image = imutils.resize(image, width=250)
    print(calc_image_temperature(image))
