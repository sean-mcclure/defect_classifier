# *************** PYTHON FUNCTIONS *******************

# import libraries
import base64

def save_images(file_name, image_path):

    with open('img/' + file_name, "wb") as fh:
        fh.write(base64.decodebytes(img_data))

    return True
