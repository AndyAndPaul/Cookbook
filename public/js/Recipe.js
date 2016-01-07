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
    this.on('sync', function(recipe, cookbook, event) {
      active.CookbookView.$el.prepend(new app.RecipeView( { model: recipe } ).render().html);
    })
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

  deleteRecipe: function() {
    this.$el.remove();
    this.model.destroy({
      wait: true
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
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + app.cookbookId;

    // call chaining
    return this;
  },
  model: app.Recipe
})

$(document).ready(function() {
  active.recipeList = new app.RecipeList(app.cookbookId);

  console.log('fetched recipe list');
})
