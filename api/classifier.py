# *************** PYTHON FUNCTIONS *******************

# import libraries
from fastai.vision import *
import json

def classifier(image_path):
    learn = load_learner('model')
    img = open_image(image_path)
    prediction = learn.predict(img)
    return(str(prediction))

def predict(image_path):
    prediction = classifier(image_path)
    return(prediction)

res = []
def predict_all(all_images):
    all_images_d = json.dumps(all_images)
    #data = json.loads(all_images_d)
    for image in all_images_d:
        this_pred = classifier(image)
        res.append(this_pred)
    return(res)