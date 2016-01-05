/*
  Cookbook/models/Cookbook.js
    Schema for the "cookbooks" collection

  Last edited
    by pavasich
    on 1/5/2016

  TODO:
    ???
*/

var RecipeSchema = require('./Recipe');

var mongoose = require('mongoose');

var CookbookSchema = new mongoose.Schema({
  name: String,
  accounts: [],
  recipes: [RecipeSchema]
})

module.exports = mongoose.model("Cookbook", CookbookSchema, "cookbooks");
