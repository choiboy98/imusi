from clarifai.rest import ClarifaiApp
import os

key = os.environ.get('CLARIFAI_KEY')
app = ClarifaiApp(api_key=key)
model = app.public_models.general_model

def get_relevant_tags(image_bytes):
    image = app.inputs.create_image_from_base64(image_bytes)
    response_data = model.predict([image])
 
    concepts = []
    for concept in response_data['outputs'][0]['data']['concepts']:
        concepts.append(concept['name'])
    return concepts
