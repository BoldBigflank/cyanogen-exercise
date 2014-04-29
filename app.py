from flask import Flask, render_template, send_file, request, send_from_directory
app = Flask(__name__)
import time, json


widgets = []


# @app.route('/widgets')
# def widgets_page():
# 	return send_file('templates/widgets.html')

# Back End
@app.route("/api/v1/time")
def timestamp():
    return json.dumps({"time": int(time.time()), "string":time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())})

@app.route("/api/v1/widget", methods=['GET', 'POST'])
def widget():
    if request.method == 'POST':
        widgets.append(request.form['widget'])
        return "OK"
    else:
        return json.dumps({"widgets":widgets})

# Front End
# @app.route('/time', defaults={'path':''})

@app.route('/partials/<path:filename>')
def send_partial(filename):
    return send_from_directory('static/partials', filename)

@app.route('/js/<path:filename>')
def send_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_file('templates/index.html')

if __name__ == "__main__":
    app.debug = True
    app.run()