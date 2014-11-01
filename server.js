var express = require('express');
var app = express();

var IP = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '8080';

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

var server = app.listen(PORT, IP);