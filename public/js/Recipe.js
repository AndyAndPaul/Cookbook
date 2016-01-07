/*
  Cookbook/public/js/Recipe.js
    Backbone recipe model & view

  Last edited
    by andy-j-d
    on 1/6/2016

  TODO:

*/

// namespaces
var app = app || {};
var active = active || {};

Backbone.Model.idAttribute = '_id';

app.Recipe = Backbone.Model.extend({
  initialize: function() {
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
  render: function() {
    this.html = this.template(this.model.attributes);
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + app.cookbookId;
    // re-render entire collection on change
    // this.on('change', function(self, event) {
    //   console.log('change event');
      // var view = new app.CookbookView({
      //   collection: self
      // });
    // });
    // return this;
  },
  model: app.Recipe
})

$(document).ready(function() {
  active.recipeList = new app.RecipeList(app.cookbookId);

  console.log('fetched recipe list');
})
