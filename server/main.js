const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

app.use(express.static(path.resolve(__dirname, "../public/")));
// not found in static files, so default to index.html

app.use(function(req, res) {
    res.redirect("/#" + req.url);
});

app.listen(80, function () {
    console.log("RinsingApp Hubs running on port 80!")
});
