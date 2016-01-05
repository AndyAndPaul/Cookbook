/*
  Cookbook/app.js
    the one and only app.js

  Last edited
    by pavasich
    on 1/4/2016

  TODO:
    add routes as we need to
    switch from ejs to hbs
*/
require('./db/database');

var express    = require('express'),
    path       = require('path'),
    bodyParser = require('body-parser');

var home = require('./routes/home');
var api  = require('./routes/api');

var app = express();

app
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(express.static('public'))

.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))

.use('/', home)
.use('/api', api);

var server = app.listen(3737, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening on %s%s", host, port);
})
