from flask import Flask, render_template, send_file
app = Flask(__name__)
import time, json

# Front End
@app.route("/")
def index():
    return send_file('templates/index.html')

# Back End
@app.route("/api/v1/time")
def timestamp():
    
    return json.dumps({"time": int(time.time())})

@app.route("/api/v1/widget", methods=['GET', 'POST'])
def widget():
    if request.method == 'POST':
        return "POST Widget"
    else:
        return "GET Widget"


if __name__ == "__main__":
    app.debug = True
    app.run()