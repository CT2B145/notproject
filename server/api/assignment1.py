################### 
# test server
###################

from flask import Flask, request 

app = Flask(__name__)

# @app.route("/hello")
# def hello():
#     return "Hello World!"

@app.route("/")
def home():
    return "Hello, Flask!"



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