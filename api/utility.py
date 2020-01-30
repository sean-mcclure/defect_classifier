import os

def remove_diff_img():
    os.system('rm diff_img/*')

def remove_contours():
    os.system('rm contours/*')

def count_contours(path):
    path, dirs, files = next(os.walk("contours/" + path + "/"))
    file_count = len(files)
    return(file_count)