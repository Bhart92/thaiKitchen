const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');
      require("dotenv").config();

let port = process.env.PORT || 3000;


// config
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(require("express-session")({
  secret: "thaiKitchen",
  resave: false,
  saveUninitialized: false
}));
app.use(function(req, res, next){
  next();
});

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.listen(port, function(){
  console.log('live');
});
