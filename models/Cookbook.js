/*
  Cookbook/models/Cookbook.js
    Schema for the "cookbooks" collection
    Schema for the "recipes" collection?

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:
    ???
*/

var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  name: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: [{
    ingredient: String,
    quantity: {
      whole: Number,
      numerator: Number,
      denominator: Number
    },
    unit: String
  }],
  instructions: [String],
  tags: [String],
  image: {type: String, default:"/img/cake.jpg"},
  authors: [String]
})

var CookbookSchema = new mongoose.Schema({
  name: String,
  accounts: [],
  recipes: [RecipeSchema]
})

module.exports.Cookbook = mongoose.model("Cookbook", CookbookSchema, "cookbooks");
module.exports.Recipe = mongoose.model("Recipe", RecipeSchema);
