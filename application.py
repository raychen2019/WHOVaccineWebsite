#Going through the material in the tutorial
import random

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("unauthenticatedMain.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/authenticatedMain")
def authenticatedMain():
    return render_template("authenticated.html")