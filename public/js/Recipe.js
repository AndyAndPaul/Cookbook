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

  initialize: function(cookbookId) {

    this.cookbookId = cookbookId;
    this.url = "/api/recipe/" + this.cookbookId + '/' + this.attributes.id;
  }

})

/*
  pass the model
   var recipe     = new app.RecipeModel(json);
   var recipeView = new app.RecipeView({model: recipe})
*/
app.RecipeView = Backbone.View.extend({
  el: "article .recipe",

  template: _.template($('#recipe-template').html()),

  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + cookbookId;
    // this.on('fetch', function() {
    //   console.log("fetching");
    //   var models = this.models;
    //   for (var m in models) {
    //     console.log(models[m].attributes);
    //   }
    // })
  },
  model: app.Recipe
})

$(document).ready(function() {
  active.recipeList = new app.RecipeList(app.cookbookId);
  active.recipeList.fetch();
  console.log("fetched recipe list");
})
