from clarifai.rest import ClarifaiApp
import os

key = os.environ.get('CLARIFAI_KEY')
print(os.environ)
app = ClarifaiApp(api_key=key)
model = app.public_models.general_model

def get_relevant_tags(image_bytes):
    
    image = app.inputs.create_image_from_bytes(image_bytes)
    response_data = model.predict_by_filename(image)
 
    tag_files = []
    for concept in response_data['outputs'][0]['data']['concepts']:
        tag_files.append(concept['name'])
 

    return tag_files
#image = "carnival.jpg"
#print (' '.join(get_relevant_tags(image)))