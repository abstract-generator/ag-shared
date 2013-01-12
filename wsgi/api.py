from flask import Flask, json, Response, redirect, request

from wiki import WikiPage

app = Flask(__name__)

@app.route('/')
def index():
    return redirect("/static/index.html")

some_counter = 0

@app.route('/api/info')
def api_info():
    global some_counter
    some_counter += 1
    js = json.dumps({"info": "Hello from flask.", 
                     "counter" : some_counter})
    return Response(js, status=200, mimetype='application/json')

@app.route('/api/wiki')
def api_wiki():
    w = WikiPage(request.args['name'], request.args['lang'])
    js = json.dumps([w.text])
    return Response(js, status=200, mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True)