/*
  Cookbook/public/js/Recipe.js
    Backbone recipe model & view

  Last edited
    by pavasich
    on 1/6/2016

  TODO:

*/

// namespaces
var app = app || {};
var active = active || {};

Backbone.Model.idAttribute = "_id";

app.Recipe = Backbone.Model.extend({
  // needs to have a cookbook ID
  initialize: function() {
    // this.url = "/api/recipe/" + app.cookbookId + '/' + this.attributes._id;
  }
})

/*
  pass the model
   var recipe     = new app.RecipeModel(json);
   var recipeView = new app.RecipeView({model: recipe})
*/
app.RecipeView = Backbone.View.extend({
  html: "",

  template: _.template($('#recipe-template').html()),

  render: function() {
    this.html = this.template(this.model.attributes);
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + app.cookbookId;

    return this;
  },
  model: app.Recipe
})

$(document).ready(function() {
    console.log("doc ready cookbookId: " + app.cookbookId);
  active.recipeList = new app.RecipeList(app.cookbookId);

  console.log("fetched recipe list");
})
