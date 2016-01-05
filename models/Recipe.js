/*
  Cookbook/models/Recipe.js
    Schema for the "recipes" collection

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
  origin: String
})

module.exports = mongoose.model("Recipe", RecipeSchema, "recipes");
