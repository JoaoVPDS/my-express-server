const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send("<h1>Hello, world!</h1>")
})

app.get('/contact', function (req, res) {
    res.send("Contact me at: joao.vpds07@gmail.com");
})

app.get('/about', function (req, res) {
    res.send("<h1>This is a page about me (:</h1><br>My name is Joao Vinicius, I'm a high school student that study system develpment at IFAL, I started working at OG1 yesterday. They asked me to learn NODE, especially express because they want to creant an API to use in the future, so here am I.")
})

app.listen(8080, function () {
    console.log("Server started on port 8080");
});