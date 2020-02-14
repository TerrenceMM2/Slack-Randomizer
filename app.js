"use strict"

const express = require("express");
const app = express();

const students = require("./students.js")

var slackWebhookUrl = "https://hooks.slack.com/services/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";

app.get("/", (req, res) => {
    const randomNum = Math.floor(Math.random() * students.length);
    const randomStu = students[randomNum];

    res.json(randomStu)
})

const port = process.env.PORT || 3000;

module.exports = app