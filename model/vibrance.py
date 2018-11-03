import numpy as np
import imutils
import cv2
import sys

MAX = 120

def calc_vibrance(image_arr):
    '''
    Source: https://www.pyimagesearch.com/2017/06/05/computing-image-colorfulness-with-opencv-and-python/
    '''
    B, G, R = cv2.split(image_arr.astype("float"))
 
    rg = np.absolute(R - G)
    yb = np.absolute(0.5 * (R + G) - B)
 
    rbMean, rbStd = (np.mean(rg), np.std(rg))
    ybMean, ybStd = (np.mean(yb), np.std(yb))
 
    stdRoot = np.sqrt((rbStd ** 2) + (ybStd ** 2))
    meanRoot = np.sqrt((rbMean ** 2) + (ybMean ** 2))
 
    return (stdRoot + (0.3 * meanRoot)) / MAX

if __name__ == '__main__':
    imagePath = sys.argv[1]
    print('Calculating Vibrance of {}.'.format(imagePath))
    image = cv2.imread(imagePath)
    image = imutils.resize(image, width=250)
    C = calc_vibrance(image)
    print(C)