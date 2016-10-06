var express = require('express');
var mongoose = require('mongoose');
var app = express();

var bodyParser = require('body-parser');

var db = mongoose.connection;
mongoose.connect('mongodb://maro:maro@ds015859.mlab.com:15859/khu-maro');

var eventSchema = mongoose.Schema({
  title: String, start: String, end: String, owner: String, password: String
});

var Events = mongoose.model('event', eventSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', express.static('public'));

app.get('/events', (req,res,next)=>{
  Events.find({}, (err,collection)=>{
    res.send(collection);
  });
});

app.post('/events', (req,res,next)=>{
  (new Events(req.body)).save((err,event)=>res.send(event));
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('MARO app listening on port 3000!');
});
