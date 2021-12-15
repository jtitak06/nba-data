const express = require("express");
const app = express();
const pointData = require("./points.json");
const reboundData = require("./rebounds.json");
const assistData = require("./assists.json");

app.get("/", (req, res) => {
    res.send("NBA Stat Leaders");
});

app.get("/points", (req, res) => {
    res.send(pointData);
});

app.get("/rebounds", (req, res) => {
    res.send(reboundData);
});

app.get("/assists", (req, res) => {
    res.send(assistData);
});

app.listen(3000, () => {
    console.log(`Port is listening on port 3000`);
});