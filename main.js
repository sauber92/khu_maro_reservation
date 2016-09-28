var express = require('express');
var fs = require('fs');
var app = express();

app.get('/login', function(req, res) {
       	fs.readFile('./public/login.html', function(error, data) {
               		res.writeHead(200, {'Content-Type':'text/html'});
               		res.end(data);
       	});
});

app.get('/', function(req, res) {
       	fs.readFile('./public/index.html', function(error, data) {
               		res.writeHead(200, {'Content-Type':'text/html'});
              		res.end(data);
       	});
});

app.listen(80, function() {
       	console.log('The server start!');
});
