from clarifai.rest import ClarifaiApp
import os

BLACK_LIST = {'no person'}

key = os.environ.get('CLARIFAI_KEY')
app = ClarifaiApp(api_key=key)
model = app.public_models.general_model

def valid_concept(concept):
    return concept not in BLACK_LIST and ' ' not in concept

def get_relevant_tags(image_bytes):
    import sys
    print('passed here1')
    sys.stdout.flush()
    image = app.inputs.create_image_from_base64(image_bytes)
    print('passed here2')
    sys.stdout.flush()
    response_data = model.predict([image])
    print('passed here3')
    sys.stdout.flush()
 
    concepts = []
    for concept in response_data['outputs'][0]['data']['concepts']:
        name = concept['name']
        if valid_concept(name):
            concepts.append(name)

    return concepts[:5]
