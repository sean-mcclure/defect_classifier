# *************** PYTHON FUNCTIONS *******************

# import libraries
import cv2
import numpy as np

def image_differencing(image_path_1, image_path_2):
    image1 = cv2.imread(image_path_1)
    image2 = cv2.imread(image_path_2)
    difference = cv2.subtract(image1, image2)
    Conv_hsv_Gray = cv2.cvtColor(difference, cv2.COLOR_BGR2GRAY)
    ret, mask = cv2.threshold(Conv_hsv_Gray, 0, 255,cv2.THRESH_BINARY_INV |cv2.THRESH_OTSU)
    difference[mask != 255] = [0, 0, 255]
    image1[mask != 255] = [0, 0, 255]
    image2[mask != 255] = [0, 0, 255]
    cv2.imwrite('img/differenced_img.png', image1)
    return True

def extract_defects_using_contours(path_to_differenced_image):

    image = cv2.imread(path_to_differenced_image)
    original = image.copy()
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    hsv_lower = np.array([0,150,50])
    hsv_upper = np.array([10,255,255])
    mask = cv2.inRange(hsv, hsv_lower, hsv_upper)

    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    opening = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    close = cv2.morphologyEx(opening, cv2.MORPH_CLOSE, kernel, iterations=1)

    cnts = cv2.findContours(close, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    offset = 20
    ROI_number = 0
    for c in cnts:
        x,y,w,h = cv2.boundingRect(c)
        cv2.rectangle(image, (x - offset, y - offset), (x + w + offset, y + h + offset), (36,255,12), 2)
        ROI = original[y-offset:y+h+offset, x-offset:x+w+offset]
        cv2.imwrite('img/{}.png'.format(ROI_number), ROI)
        ROI_number += 1

    return True
