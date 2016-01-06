require('./database');

var models = require('../models/Cookbook');

models.Recipe.findById("568c75fe0b1ec33a16330df7",function(err, recipe) {
  console.log(recipe);
  recipe.cookTime = 4;
  recipe.save();
})
