/*
  Cookbook/models/Cookbook.js
    Schema for the "cookbooks" collection
    Schema for the "recipes" collection?

  Last edited
    by pavasich
    on 1/5/2016

  TODO:
    ???
*/

var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  name: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: [String],
  instructions: [String],
  tags: [String],
  image: String,
  authors: [String]
})

var CookbookSchema = new mongoose.Schema({
  name: String,
  accounts: [],
  recipes: [RecipeSchema]
})

module.exports.Cookbook = mongoose.model("Cookbook", CookbookSchema, "cookbooks");
module.exports.Recipe = mongoose.model("Recipe", RecipeSchema);
