/*
  Cookbook/routes/home.js
    routes for /

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:

*/
var express = require('express'),
    router  = express.Router();

router
.get("/", function(req, res) {
  console.log("get /")
  res.render('index', {
    user: req.user,
    title: 'Home'
  });
})

.get("/cookbook/:id", function(req, res) {
  console.log(req.params.id);
  res.render('single-cookbook', {
    user: req.user,
    cookbookId: req.params.id,
    title: '',
    singleCookbook: true
  });
})

module.exports = router;
