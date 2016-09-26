console.log('The server start (http://163.180.142.77:80)');

var http = require('http');

http.createServer(function(req, res) {
  res.end('Hello, maro');
}).listen(80);
