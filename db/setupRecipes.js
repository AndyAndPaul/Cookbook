/*
  Cookbook/db/setupRecipes.js
    database setup

  Last edited
    by pavasich
    on 1/5/2016
*/

require('./database');
var mongoose = require('mongoose');
var models = require('../models/Cookbook');

models.Cookbook.find({name: "ADPV Recipes"}, function(err, cookbooks) {
  console.log(cookbooks);
  models.Recipe.create({
    "name": "Peanut Butter and Jelly Sandwich",
    "prepTime": 2,
    "cookTime": 0,
    "ingredients": [
      "peanut butter",
      "jelly",
      "bread"
    ],
    "instructions": [
      "Spread peanut butter on one piece of bread.",
      "Spread jelly on one piece of bread.",
      "Combine the two pieces of bread with the peanut butter and jelly on the inside."
    ],
    "tags": [
      "peanut butter",
      "jelly",
      "bread",
      "sandwich"
    ]
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
  });

  models.Recipe.create({
    "name": "Spaghetti with marinara sauce",
    "prepTime": 2,
    "cookTime": 5,
    "ingredients": [
      "1 box angel hair pasta",
      "1 bottle marinara sauce"
    ],
    "instructions": [
      "Heat marinara sauce in a large saucepan",
      "Bring a pot of water to a full boil",
      "Add a few tablespoons of olive oil and some salt to the water",
      "Put the angel hair in the water and bring back to a full boil",
      "Cook for 4 minutes",
      "Strain the pasta",
      "Combine pasta and warm sauce"
    ],
    "tags": [
      "spaghetti",
      "pasta",
      "Italian"
    ]
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
  });
  models.Recipe.create({
    "name": "Corn on the cob",
    "prepTime": 5,
    "cookTime": 15,
    "ingredients": [
      "ears of corn",
      "butter",
      "salt and pepper"
    ],
    "instructions": [
      "Place a pot of water over high heat",
      "Shuck the corn",
      "When water is boiling, add shucked ears of corn",
      "Cover and keep at high heat until water returns to a full boil",
      "Turn off the heat, keep covered for 15 minutes, stirring occasionally",
      "Serve with lots of butter, salt and pepper"
    ],
    "tags": [
      "corn"
    ]
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
    cookbook.save();
  });

});

mongoose.disconnect();
