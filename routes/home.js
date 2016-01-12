/*
  Cookbook/routes/home.js
    routes for /

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:

*/
var express = require('express'),
    router  = express.Router(),
    exp     = require('../models/Cookbook');
var model  = exp.Cookbook;

router
.get('/', function(req, res) {
  console.log('get /')
  if (req.user)
    res.redirect('/cookbook/'+req.user.cookbooks[0])
  else {
    res.render('index', {
      user: req.user,
      title: 'Home'
    });
  }
})

.get('/cookbook/:id', function(req, res) {
  console.log(req.params.id);
  model.findById(req.params.id, function(err, cookbook) {
    if (err) {
      res.redirect('/error');
    }
    else {
      if (!cookbook) {
        res.redirect('/error');
      }
      else if (!cookbook.recipes) {
        res.redirect('/error')
      }
      else {
        res.render('single-cookbook', {
          user: req.user,
          cookbookId: req.params.id,
          title: cookbook.title,
          singleCookbook: true
        });
      }
    }
  })


})

.get('/error', function(req, res) {
  res.render('error');
})

.get('/not-found', function(req, res) {
  res.render('not-found');
})

module.exports = router;
