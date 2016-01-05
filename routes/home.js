/*
  Cookbook/routes/home.js
    routes for /

  Last edited
    by pavasich
    on 1/4/2016

  TODO:
    make an actual index.html
*/
var express = require('express'),
    router  = express.Router();

router
.get("/", function(req, res) {
  console.log("get /")
  res.render('index');
})

module.exports = router;
