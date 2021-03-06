/*
  Cookbook/routes/api.js
    routes for the api

  Last edited
    by andy-j-d
    on 1/6/2016

  TODO:
    render all pretty
*/

var express = require('express'),
    router  = express.Router(),
    exp    = require('../models/Cookbook');
var model  = exp.Cookbook,
    Recipe = exp.Recipe,
    Account   = require('../models/Account')

router

/*
                    COOKBOOK  OPERATIONS
*/

//                                                              GET ALL
.get('/cookbook', function(req, res) {
  console.log('get /api/cookbook');
  model.find(function(err, cookbooks) {

    if (err) res.json(err)

    else res.json(cookbooks);

  })
})

//                                                              GET ONE
.get('/cookbook/:id', function(req, res) {
  console.log('get /api/cookbook/'+req.params.id);
  model.findById(req.params.id, function(err, cookbook) {

    if (err) res.json(err);

    else if (!cookbook)
      res.redirect('/error');
    else if (!cookbook.recipes)
      res.redirect('/error');
    })
})

//                                                              POST
.post('/cookbook', function(req, res) {
  console.log('post /api/cookbook');
  model.create(req.body, function(err, cookbook) {

    if (err) res.json(err);

    else res.json(cookbook);

  })
})

//                                                              PUT/PATCH
.put('/cookbook/:id', function(req, res) {
  console.log('put /api/cookbook/'+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {

    if (err) res.json(err);

    else res.json(cookbook);

  })
})
.patch('/cookbook/:id', function(req, res) {
  console.log('patch /api/cookbook/'+req.params.id);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, cookbook) {

    if (err) res.json(err);

    else res.json(cookbook);

  })
})

//                                                              DELETE
.delete('/cookbook/:id', function(req, res) {
  console.log('delete /api/cookbook/'+req.params.id);
  model.findByIdAndRemove(req.params.id, function(err, something) {

    if (err) res.json(err);

    else res.json(something);

  })
})

.get('/cookbook/:id/search/:searchterm', function(req, res) {
  console.log('get /api/cookbook/'+req.params.id +'/search/' + req.params.searchterm);
  model.findById(req.params.id, function(err, cookbook) {
    if(err) res.json(err)
    else {
      var results = [];
      var query = req.params.searchterm;
      cookbook.recipes.map(function(recipe) {
        if(recipe.name.toLowerCase().search(query) != -1) {
          results.push(recipe);
        }
      });
      res.json(results);
    }
  });
})


/*
                    RECIPE  OPERATIONS
*/

//                                                              GET
.get('/recipe/:cookbookId/:recipeId', function(req, res) {
  console.log('get /api/recipe/'+
              req.params.cookbookId+'/'+
              req.params.recipeId);
  model.findById(req.params.cookbookId, function(err, cookbook) {

    if (err) res.json(err)

    else res.json(cookbook.recipes.id(req.params.recipeId))

  })
})
//                                                              GET ALL
.get('/recipe/:cookbookId', function(req, res) {
  console.log('get /api/recipe/' + req.params.cookbookId);

  model.findById(req.params.cookbookId, function(err, cookbook) {

    if (err) res.json(err)
    else if (!cookbook) {
      console.log('no cookbook, redirecting to /error')
      res.redirect(500, '/error')
    }
    else if (!cookbook.recipes) {
      console.log('no recipes, redirecting to /error')
      res.redirect(500, '/error')
    }

    else res.json(cookbook.recipes)

  })
})

//                                                              POST
.post('/recipe/:cookbookId', function(req, res) {
  console.log('post /api/recipe/'+req.params.cookbookId);
  model.findById(req.params.cookbookId, function(err, cookbook) {
    Recipe.create(req.body, function(err, recipe) {

      if (err) res.json(err);

      else {
        cookbook.recipes.push(recipe)
        cookbook.save();
        res.json(recipe);
      }
    })
  })
})

//                                                             PUT/PATCH
.put('/recipe/:cookbookId/:recipeId', function(req, res) {
  console.log('put /api/recpie/'+
              req.params.cookbookId+'/'+
              req.params.recipeId);
  model.findById(req.params.cookbookId, function(err, cookbook) {

    if (err) res.json(err)

    else {
      cookbook.recipes.id(req.params.recipeId).set(req.body);
      cookbook.save();
      res.json(cookbook);
    }
  })
})
.patch('/recipe/:cookbookId/:recipeId', function(req, res) {
  console.log('patch /api/recpie/'+
              req.params.cookbookId+'/'+
              req.params.recipeId);
  model.findById(req.params.cookbookId, function(err, cookbook) {

    if (err) res.json(err)

    else {
      cookbook.recipes.id(req.params.recipeId).set(req.body);
      cookbook.save();
      res.json(cookbook);
    }
  })
})

//                                                             DELETE
.delete('/recipe/:cookbookId/:recipeId', function(req, res) {
  console.log('delete /api/recpie/'+
              req.params.cookbookId+'/'+
              req.params.recipeId);
  model.findById(req.params.cookbookId, function(err, cookbook) {

    if (err) res.json(err)

    else {
      cookbook.recipes.id(req.params.recipeId).remove();
      cookbook.save();
      res.json(cookbook);
    }
  })
})

/*
                    USER  OPERATIONS
*/

//                                                              GET
.get('/user/:userId/cookbooks', function(req, res) {
  console.log('get /api/user/'+req.params.userId+'/cookbooks');
  Account.findById(req.params.userId, function(err, account) {

    if (err) res.json(err);

    else {
      model.find({
        '_id': { $in: account.cookbooks }
      },
      function(err, cookbooks) {
        if (err) res.json(err);
        else res.json(cookbooks);
      })
    }
  })
});

module.exports = router;
