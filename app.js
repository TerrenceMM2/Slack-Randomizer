"use strict"

const express = require("express");
const app = express();

// External data file
const students = require("./students.js")

// @route GET "/"
// @desc provides a random value from supplied data file.
app.get("/", (req, res) => {
    const randomNum = Math.floor(Math.random() * students.length);
    res.json({
        "text": students[randomNum].firstName + " " + students[randomNum].lastName
    });
})

const port = process.env.PORT || 3000;

module.exports = app