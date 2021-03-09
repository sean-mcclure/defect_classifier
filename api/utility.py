import os
from flask import request, jsonify
from classifier import *
from image_differencing import *

def remove_diff_img():
    os.system('rm diff_img/*')

def remove_contours():
    os.system('rm contours/*')

def count_contours(path):
    path, dirs, files = next(os.walk("contours/" + path + "/"))
    file_count = len(files)
    return(file_count)

my_operations = {
    "image_differencing" : image_differencing,
    "extract_defects_using_contours" : extract_defects_using_contours,
    "remove_diff_img" : remove_diff_img,
    "remove_contours" : remove_contours,
    "count_contours" : count_contours
}

def request_return():
    passed_function = request.args.get("function")
    try:
        args = dict(request.args)
        del args['function']
        res = my_operations[passed_function](**args)
        return(jsonify(res))
    except ValueError:
        return(ValueError)