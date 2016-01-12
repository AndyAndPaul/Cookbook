/*
  Cookbook/app.js
    the one and only app.js

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:

*/

// declare passport and set up local strategy
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
require('dotenv').load();
require('./db/database');

var express    = require('express'),
    path       = require('path'),
    bodyParser = require('body-parser');

var home = require('./routes/home');
var api  = require('./routes/api');
var accounts = require('./routes/account');

var app = express();

// set up express sessions
app.use(require('express-session')({
  secret: 'tom loves tommy',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// configure passport
var Account = require('./models/Account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

.use(express.static('public'))

.use(bodyParser.json({limit: '5mb'}))
.use(bodyParser.urlencoded({ extended: false }))

.use('/', home)
.use('/api', api)
.use('/account', accounts)

.use('*', function(req,res) {
  res.redirect('/not-found')
})

var server = app.listen(process.env.SERVERPORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening on %s%s", host, port);
})
