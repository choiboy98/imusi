import requests
import sys
import os

import base64

# URL = 'http://0.0.0.0:5000/'
# os.environ['NO_PROXY'] = '0.0.0.0'
URL = 'https://imusi.herokuapp.com/'

if __name__ == '__main__':
    img_name = sys.argv[1]
    with open(img_name, "rb") as f:
        img_str = base64.b64encode(f.read())

    print("Size of image: {}".format(len(img_str)))

    r = requests.post(URL + 'image/', data={'bytes': img_str})
    print(r.content)
