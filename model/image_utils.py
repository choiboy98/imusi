import cv2
import numpy as np

def bytes_to_rgb(image_bytes):
    '''
    Source: https://stackoverflow.com/questions/49511753/python-byte-image-to-numpy-array-using-opencv
    '''
    decoded = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), -1)
    return decoded
