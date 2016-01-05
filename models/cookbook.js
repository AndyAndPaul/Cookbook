/*
  Cookbook/models/cookbook.js
    Schema for the "cookbooks" collection

  Last edited
    by pavasich
    on 1/4/2016

  TODO:
    Recipe ought to be its own Schema
*/

var mongoose = require('mongoose');

var CookbookSchema = new mongoose.Schema({
  name: String,
  accounts: [],
  recipes: [{
    name: String,
    prepTime: Number,
    cookTime: Number,
    ingredients: [String],
    instructions: [String],
    tags: [String],
    origin: String
  }]
})

module.exports = mongoose.model("Cookbook", CookbookSchema, "cookbooks");
