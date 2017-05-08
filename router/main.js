var bodyParser = require('body-parser');

module.exports = function(app, fs) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', function(req, res) {
    res.render('index', {
      title: "KHU-MARO | 동방예약시스템"
    });
  });
};