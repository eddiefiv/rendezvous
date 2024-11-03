import dotenv
import os

from flask import Flask, make_response, jsonify, request
from flask_cors import CORS, cross_origin

from models import Post
from utils import PSQLManager

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

manager = PSQLManager()

@app.route('/posts', methods = ["GET", "OPTIONS"])
@cross_origin()
def posts():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()
    posts = manager.get_posts(20)
    if posts != None:
        return make_response(jsonify({"data": [post for post in posts]}))
    return _corsify_actual_response(make_response(jsonify({"data": []})))

@app.route("/posts", methods = ["POST", "OPTIONS"])
@cross_origin()
def make_post():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()
    data = request.json

    post: Post = manager.make_post(data['title'], data['description'], data['author'], data['flare'])

    return make_response(jsonify({"data": post.dict()}))

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
if __name__ == "__main__":
    dotenv.load_dotenv() # load .env variables

    manager.connect_psql(user = os.environ["PSQL_USER"], password = os.environ["PSQL_PASSWORD"], dbname = os.environ["PSQL_DBNAME"])
    app.run(debug = True) # start app