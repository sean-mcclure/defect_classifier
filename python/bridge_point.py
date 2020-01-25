import sys

# import all functions from python scripts

from image_differencing import *
from classifier import *

function_choice = sys.argv[1]

result = eval(function_choice)

print(result)
sys.stdout.flush()