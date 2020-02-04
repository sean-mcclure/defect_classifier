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