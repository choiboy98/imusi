import cv2
import base64
import numpy as np

def bytes_to_rgb(image_bytes):
    # img_arr = imread(io.BytesIO(base64.b64decode(image_bytes)))
    # return img_arr

    decoded = base64.b64decode(image_bytes)
    nparr = np.fromstring(decoded, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img
