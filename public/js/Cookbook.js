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
    console.log(this.recipeList);
    this.render();
  },

  render: function() {
    var target = this.el;
    for (var m in active.recipeList.models)
      console.log(active.recipeList[m].attributes)
    // for (var i = 0; i < this.recipeList.models.length; i++) {
    //   console.log(this.recipeList.models[i]);
    //   this.recipeList.models[i].fetch({
    //     success: function(data) {
    //       var tmp = new app.RecipeView({ model: data });
    //       $target.append(tmp.render().el)
    //     }
    //   })
    //
    // }
  },

});

$(document).ready(function() {
  active.Cookbook = new app.Cookbook(app.cookbookId)
  active.CookbookView = new app.CookbookView({ model: active.Cookbook });
})
