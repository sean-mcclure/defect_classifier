# import libraries
import cv2
import numpy as np
from tetryonai.main import *

def image_differencing(image_path_1, image_path_2, id):
    subtract_images(**{
        "image_path_1": image_path_1,
        "image_path_2": image_path_2,
        "write_path": "diff_img/diff_" + id + ".png"
    })
    return(True)

def extract_defects_using_contours(path_to_diff, id):
    directory(**{
        "choice": "make",
        "directory_path": "contours/" + id
    })
    extract_contours_from_image(**{
        "image_path": path_to_diff,
        "write_path": "contours/" + id + "/",
        "hsv_lower": [0, 150, 50],
        "hsv_upper": [10, 255, 255]
    })
    return (True)
