var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbconfig = require('../config/password.js');
var connection = mysql.createConnection(dbconfig);
var passport = require('passport'), KakaoStrategy = require('passport-kakao').Strategy;
var kakao = require('../config/kakao');

module.exports = function(app, fs) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', function(req, res) {
    res.render('index', {
      title: "KHU-MARO | 동방예약시스템"
    });
  });

  app.get('/schedule', function(req, res) {
    connection.query('select * from schedule', function (err, results, fields) {
      res.json(results);
    });
  });

  app.get('/auth/login/kakao', passport.authenticate('kakao'));

  app.get('/auth/login/kakao/callback', passport.authenticate('kakao', {
      successRedirect: '/',
      failureRedirect: '/auth/login/kakao'
    })
  );
};

passport.serializeUser(function (user, done) {
  done(null, user)
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

passport.use(new KakaoStrategy({
    clientID: kakao.client_id,
    callbackURL: kakao.callback_url
  },
  function() {

  }
));