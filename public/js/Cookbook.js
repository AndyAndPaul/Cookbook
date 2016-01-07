/*
  Cookbook/public/js/Cookbook.js
    Backbone cookbook model & view

  Last edited
    by andy-j-d
    on 1/7/2016

  TODO:

*/

// namespaces
var app = app || {}; // constructors go here
var active = active || {}; // instantiated objects go here

Backbone.Model.idAttribute = '_id';

app.Cookbook = Backbone.Model.extend({
  initialize: function() {
    this.url = '/api/cookbook/' + app.cookbookId;
  }
})

app.CookbookView = Backbone.View.extend({

  el: '#recipes-container',

  initialize: function() {
    console.log('Cookbook view initialized');
    this.model.fetch().then(function(m) {
      // render cookbook name as page title
      $('#page-title').html(m.name);
    });

    this.$el.html('');
    var self = this;

    /* fetch models from the database,
        then, render */
    active.recipeList.fetch()
      .then(function() {
        active.recipeModels = active.recipeList.models;
        self.render();
      });
  },

  render: function() {
    active.recipeViews = active.recipeViews || {};
    var target = this.$el;
    active.recipeModels.forEach(function(m) {
      // i see your lisp skills, paul -james
      console.log(m);
      var events = {};
      events["click button#delete_"+m.attributes._id] = "deleteRecipe";
      active.recipeViews['view_' + m.attributes._id] = new app.RecipeView( { model: m, events } );


      target.append(active.recipeViews['view_' + m.attributes._id].render().html);
    });
  }

});

$(document).ready(function() {
  active.Cookbook = new app.Cookbook(app.cookbookId)
  active.CookbookView = new app.CookbookView({ model: active.Cookbook });
})
