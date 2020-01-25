# *************** PYTHON FUNCTIONS *******************

# import libraries
from fastai.vision import *
import json

def classifier(image_path):
    learn = load_learner('data')
    img = open_image(image_path)
    prediction = learn.predict(img)
    return prediction

res = []
def predict_all(all_images):
    all_images_d = json.dumps(all_images)
    data = json.loads(all_images_d)
    for image in data:
        this_pred = classifier(image)
        res.append(this_pred)
    return(res)