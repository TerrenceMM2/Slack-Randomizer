"use strict"

const express = require("express");
const app = express();

const students = require("./students.js")

app.get("/", (req, res) => {
    const randomNum = Math.floor(Math.random() * students.length);
    res.json({"text": students[randomNum].firstName + " " + students[randomNum].lastName});
})

const port = process.env.PORT || 3000;

module.exports = app