/*
  Cookbook/routes/api.js
    routes for the api

  Last edited
    by pavasich
    on 1/5/2016

  TODO:
    add functionality to routes
    recipe model
    render all pretty
*/

var express = require('express'),
    router  = express.Router(),
    model   = require('../models/Cookbook');

router
.post('/', function(req, res) {
  console.log("post /api");
})

.get("/", function(req, res) {
  console.log("get /api");
  model.find(function(err, cookbooks) {
    if (err) console.log(err)
    res.json(cookbooks);
  })
})
.get("/:id", function(req, res) {
  console.log("get /api/"+req.params.id);
  model.findById(req.params.id, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook);
  })
})

.put("/:id", function(req, res) {
  console.log("put /api/"+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook)
  })
})
.patch("/:id", function(req, res) {
  console.log("put /api/"+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook)
  })
})

module.exports = router;
