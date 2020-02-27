from flask import Flask, request, jsonify
import json
from image_differencing import *
from classifier import *
from utility import *

def string_to_number(str):
  if("." in str):
    try:
      res = float(str)
    except:
      res = str
  elif(str.isdigit()):
    res = int(str)
  else:
    res = str
  return(res)


@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    response.headers['Access-Control-Allow-Methods'] = "POST, GET, PUT, DELETE, OPTIONS"
    return response

@app.route("/call_function/", methods=["GET"])
def call_function():
    passed_function = request.args.get('function')
    args = dict(request.args)
    values = list(args.values())[1:]
    values = list(map(string_to_number, values))
    res = globals()[passed_function](*tuple(values))
    return(jsonify(res))

if __name__ == "__main__":
    app.run(debug=True, port=5000)

