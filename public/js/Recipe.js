/*
  Cookbook/public/js/Recipe.js
    Backbone recipe model & view

  Last edited
    by andy-j-d
    on 1/7/2016

  TODO:

*/

// namespaces
var app = app || {};
var active = active || {};

app.Recipe = Backbone.Model.extend({
  initialize: function() {
    this.idAttribute = '_id';
  }
});

/*
  pass the model
   var recipe     = new app.RecipeModel(json);
   var recipeView = new app.RecipeView({model: recipe})
*/
app.RecipeView = Backbone.View.extend({
  html: '',
  template: _.template($('#recipe-template').html()),

  initialize: function() {
  },

  deleteRecipe: function(e) {

    console.log('button clicked');
    this.url = '/api/recipe/' + app.cookbookId + '/' + this.model.attributes._id;
    $(this.el).remove();
    this.model.destroy({
      wait: true,
      success: function(model, res, options){
      }
    });
  },

  render: function() {
    this.html = this.template(this.model.attributes);
    this.html = $(this.el).append(this.html);

    // call chaining
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  idAttribute: '_id',
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + app.cookbookId;
    this.on('reset', this.updateView);

    // // call chaining
    return this;
  },
  updateView: function(current, previous) {
    var keep = current.models;
    var diff = $(previous.previousModels).not(keep).get();
    console.log(diff);
    diff.forEach(function(recipe){
      var id = recipe.attributes._id;
      $('#recipe_' + id).hide();
    });
    // var removed = keep.diff(previous.previousModels);
    // console.log(removed);
  },
  model: app.Recipe
})

$(document).ready(function() {
  active.recipeList = new app.RecipeList(app.cookbookId);
  $('#search').on('keyup', function(e) {
    var query = e.target.value;
    active.recipeList.fetch();
    var results = active.recipeList.filter(function(recipe) {
      return(recipe.attributes.name.toLowerCase().search(query) != -1)
    });
    active.recipeList.reset(results);
  });
  console.log('fetched recipe list');
})
