const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("this is me mujtaba abid");
});

app.get("/facebook", (req, res) => {
    res.send("this is Facebook path");
});

app.get("/login", (req, res) => {
    res.send("<h1>this is login page</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h1>this is YouTube</h1>");
});

module.exports = app;
