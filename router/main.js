var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbconfig = require('../config/password.js');
var connection = mysql.createConnection(dbconfig);

module.exports = function(app, fs) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', function(req, res) {
    res.render('index', {
      title: "KHU-MARO | 동방예약시스템"
    });
  });

  app.get('/maro', function(req, res) {

  });
};