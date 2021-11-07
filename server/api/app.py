from flask import Flask, request, jsonify, redirect, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import psycopg2
import json
import redshift_connector
import collections
import sqlite3
import numpy
from sqlalchemy import inspect


app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return "Hello, Flask!"


# helper to get information from the database
def getInformation():
    # cursor: redshift_connector.Cursor = conn.cursor()
    connection = sqlite3.connect('../data/doctor_a.db')
    cursor = connection.cursor()
    cursor.execute('''SELECT * from doctor_a''')
    rows: numpy.ndarray = cursor.fetchall()
    # print(result)
    print("test")

    # Convert query to objects of key-value pairs
    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        print("dic made")
        d["First_Name"] = row[0]
        d["Last_Name"] = row[1]
        d["DATE"] = row[2]
        d["Patient_Type"] = row[3]
       
        objects_list.append(d)
        print(d)
    print("can i add to the j?")
    
    connection.close()
    return objects_list


# GET ONLY ALL ROW
@app.route('/getDataAll/', methods=["GET"])
def getAllRows():
    try:
        if request.method == "GET":
            objects_list = getInformation()
            j = json.dumps(objects_list, indent=4,  default=str)
            print(j)
            return j , 200

        return "404"
    except Exception as e:
        flash(e)
        return "This method is unsupported.", 405

@app.route('/hello', methods=["GET","POST"])
def login_page():
    try:
        if request.method == "POST":
            return "This method is unsupported", 405
        elif request.method == "GET":
            return "Hello, world!"
        return "404"
    except Exception as e:
        #flash(e)
        return "Something went wrong. - Windows 8.1 2014"

@app.route('/check', methods=["GET","POST"])
def front_page():
    try:
        if request.method == "POST":
            if request.args != "":
                return "POST message received: " + request.args.get('msg')
            # elif request.args.get('msg') ==  None:
            #     return "This method is unsupported", 405
        elif request.method == "GET":
            return "GET message received", 200

        return "404"
    except Exception as e:
        #flash(e)
        return "This method is unsupported", 405

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port = 8081)