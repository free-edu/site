var express = require('express');
var app = express();

var IP = process.env.IP || process.env.OPENSHIFT_NODEJS_IP;
var PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

var server = app.listen(PORT, IP);