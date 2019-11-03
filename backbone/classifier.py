# *************** PYTHON FUNCTIONS *******************

# import libraries
from fastai.vision import *



def classifier(image_path):
    learn = load_learner('data')
    img = open_image(image_path)
    prediction = learn.predict(img)
    return prediction
