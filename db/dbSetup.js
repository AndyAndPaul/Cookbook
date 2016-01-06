/*
  Cookbook/db/dbSetup.js
    database setup

  Last edited
    by pavasich
    on 1/5/2016
*/

require('./database');
var models = require('../models/Cookbook');

// models.Cookbook.create({
//     "name": "ADPV Recipes",
//     "recipes": [],
//     "accounts": []
//   },
//   function(err, cookbook) {
//     console.log(cookbook);
//   })

models.Cookbook.find({name: "ADPV Recipes"}, function(err, cookbook) {
  cookbook = cookbook[0];
  models.Recipe.create({
    "name": "Peanut Butter and Jelly Sandwich",
    "prepTime": 2,
    "cookTime": 0,
    "ingredients": [
      {
        ingredient: "Peanut butter",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 2
        },
        unit: "dab"
      },
      {
        ingredient: "Jelly",
        quantity: {
          whole: 1,
          numerator: 1,
          denominator: 2
        },
        unit: "glob"
      },
      {
        ingredient: "Bread",
        quantity: {
          whole: 2,
          numerator: 0,
          denominator: 2
        },
        unit: "slices"
      }

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
      {
        ingredient: "angel hair",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 2
        },
        unit: "box"
      },
      {
        ingredient: "marinara sauce",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 2
        },
        unit: "bottle"
      }
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
      {
        ingredient: "corn",
        quantity: {
          whole: 8,
          numerator: 0,
          denominator: 2
        },
        unit: "ear"
      },
      {
        ingredient: "butter",
        quantity: {
          whole: 2,
          numerator: 1,
          denominator: 4
        },
        unit: "stick"
      },
      {
        ingredient: "salt",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: "tsp"
      }
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
