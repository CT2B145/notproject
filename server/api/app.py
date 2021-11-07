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


def getInformation():
   


    # cursor: redshift_connector.Cursor = conn.cursor()


    connection = sqlite3.connect('../data/doctor_a.db')
    cursor = connection.cursor()

    test = cursor.execute(
        "select * from user_services_dev.user_services_dev.onboarding_issues")

    rows: numpy.ndarray = cursor.fetchall()
    # print(result)
    # rowarray_list = []
    # for row in rows:
    #     t = (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7])
    #     rowarray_list.append(t)
    #     print(row, "sefsefsefesfefe")
    # j = json.dumps(rowarray_list, indent=4, sort_keys=True, default=str)
    # print("made it out")
    # print(rowarray_list)
    # print(j)
    print("test")

    # Convert query to objects of key-value pairs
    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        print("dic made")
        d["id"] = row[0]
        d["userid"] = row[1]
        d["comments"] = row[2]
        d["snow_id"] = row[3]
        d["action"] = row[4]
        d["issue_type"] = row[5]
        d["nho_date"] = row[6]
        d["sims_approval_date"] = row[7]
        objects_list.append(d)
        print(d)
    print("can i add to the j?")
    
    conn.close()
    return objects_list


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