/*
  Cookbook/public/js/Cookbook.js
    Backbone cookbook model & view

  Last edited
    by pavasich
    on 1/6/2016

  TODO:

*/

// namespaces
var app = app || {}; // constructors go here
var active = active || {}; // instantiated objects go here

Backbone.Model.idAttribute = "_id";

app.Cookbook = Backbone.Model.extend({
  initialize: function() {
  }
})

app.CookbookView = Backbone.View.extend({

  el: '#recipes-container',

  initialize: function() {
    console.log('Cookbook view initialized');
    this.$el.html('');
    var self = this;
    active.recipeList.fetch({
      success: function(data) {
          active.recipeModels = data.models;
          console.log(active.recipeModels)
          self.render();
      }
    });

  },

  render: function() {
    var target = this.$el;
    active.recipeModels.forEach(function(m) {
      target.append(new app.RecipeView( { model: m } ).render().html)
    })
  }

});

$(document).ready(function() {
  console.log("cookbookId: " + app.cookbookId);
  active.Cookbook = new app.Cookbook(app.cookbookId)
  active.CookbookView = new app.CookbookView({ model: active.Cookbook });
})
