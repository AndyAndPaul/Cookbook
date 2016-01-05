/*
  Cookbook/routes/api.js
    routes for the api

  Last edited
    by pavasich
    on 1/5/2016

  TODO:
    add functionality to routes
    render all pretty
*/

var express = require('express'),
    router  = express.Router(),
    exp   = require('../models/Cookbook');
var model  = exp.Cookbook,
    Recipe = exp.Recipe;

router
.post('/cookbook', function(req, res) {
  console.log("post /api/cookbook");
})

.post('/recipe', function(req, res) {
  console.log("post /api/recipe");
  // model.findById("568c15b6ffe578dd09aef417", function(err, cookbook) {
  //   Recipe.create(req.body, function(err, recipe) {
  //     if (err) console.log(err);
  //     cookbook.recipes.push(recipe)
  //     cookbook.save();
  //   })
  //   res.json(cookbook);
  // })
})

.get("/cookbook", function(req, res) {
  console.log("get /api/cookbook");
  model.find(function(err, cookbooks) {
    if (err) console.log(err)
    res.json(cookbooks);
  })
})
.get("/cookbook/:id", function(req, res) {
  console.log("get /api/cookbook/"+req.params.id);
  model.findById(req.params.id, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook);
  })
})

.put("/cookbook/:id", function(req, res) {
  console.log("put /api/cookbook/"+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook)
  })
})
.patch("/cookbook/:id", function(req, res) {
  console.log("put /api/cookbook/"+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {
    if (err) console.log(err)
    res.json(cookbook)
  })
})
.delete("/cookbook/:id", function(req, res) {
  console.log("delete /api/cookbook/"+req.params.id);
  model.findByIdAndRemove(req.params.id, function(err, something) {
    if (err) console.log(err)
    res.json(something);
  })
})

module.exports = router;
