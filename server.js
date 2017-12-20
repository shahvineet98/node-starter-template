'use strict';

var config = require("./config");
var express = require("express");
var path = require('path');
var compress = require('compression');
var bodyParser = require('body-parser');
var request = require("request");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(compress());
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/route', function(req,res) {
	res.send("hello")
}) 

app.post('/route', function(req,res) {
	res.send("hello")
}) 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});