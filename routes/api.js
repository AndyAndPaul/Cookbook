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

.post('/cookbook/:id/recipe', function(req, res) {
  console.log("post /api/cookbook/:id/recipe");
  model.findById(req.params.id, function(err, cookbook) {
    Recipe.create(req.body, function(err, recipe) {
      if (err) {
        console.log(err);
      } else {
        cookbook.recipes.push(recipe)
        cookbook.save();
      }
    })
    res.json(cookbook);
  })
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

.get("/recipe/:cookbookId/:recipeId", function(req, res) {
  console.log("get /api/recipe/"+req.params.cookbookId+'/'+req.params.recipeId);
  model.findById(req.params.cookbookId, function(err, cookbook) {
    if (err) {
      res.json(err)
    } else {
      res.json(cookbook.recipes.id(req.params.recipeId))
    }
  })
})

module.exports = router;
