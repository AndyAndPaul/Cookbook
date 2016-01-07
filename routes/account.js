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
var models = require('../models/Cookbook');
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
  if(req.user) {
    res.redirect('/');
  } else {
    res.render('register', {
      title: 'Registration',
      user: req.user
    });
  }
});

router.post('/register', function(req, res) {
  var username = req.body.username;
  models.Cookbook.create({name: username+"'s recipes"}, function(err, cookbook) {
    if (err) res.json(err)
    else {
      Account.register(new Account({ username: username,
                                     cookbooks: [cookbook.id] }),
        req.body.password,
        function(error, account) {
          if (error) {
            res.render('register', { account: account });
          }
          else {
            passport.authenticate('local')(req, res, function() {
              res.redirect('/');
            });
          }
      })
    }
  })
});

router.get('/login', function(req, res) {
  if(req.user) {
    res.redirect('/');
  } else {
    res.render('login', {
      title: 'Login',
      user: req.user
    });
  }
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/account/login' }),
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
