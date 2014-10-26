var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

var server = app.listen(process.env.PORT, process.env.IP);