import cv2
import sys
import math
import numpy as np
import imutils

def calc_brightness(image_arr):
    '''
    Source: https://stackoverflow.com/questions/3490727/what-are-some-methods-to-analyze-image-brightness-using-python
    '''
    avg = np.average(image_arr, axis=0)
    r, g, b = np.average(avg, axis=0)
    return math.sqrt(0.241 * (r ** 2) + 0.691 * (g ** 2) + 0.068 * (b ** 2)) / 255

if __name__ == '__main__':
    pic_name = sys.argv[1]
    im_arr = cv2.imread(pic_name)
    im_arr = imutils.resize(im_arr, width=250)
    print(calc_brightness(im_arr))
