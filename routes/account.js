/*
  Cookbook/routes/account.js
    routes for accounts/users

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:

*/

// account router
var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('../models/Account');
var router = express.Router();

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

router.get('/', function(req, res) {
  res.render('account', {
    title: 'Account Management',
    user: req.user
  });
});

router.get('/register', function(req, res) {
  res.render('register', {
    title: 'Registration',
    user: req.user
  });
});

router.post('/register', function(req, res) {
  var username = req.body.username
  Account.register(new Account({
    username: username
  }),
  req.body.password, function(error, account) {
      if (error) {
        return res.render('register', { account: account });
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
  })
});

router.get('/login', function(req, res) {
  res.render('login', {
    title: 'Login',
    user: req.user
  });
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);


router.get('/leave', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/protectedresourced', function(req, res) {
  res.status(200).send('the secret to every success is to never stop');
});

module.exports = router;
