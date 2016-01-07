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

Backbone.Model.idAttribute = '_id';

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

    /* fetch models from the database,
        then, render */
    active.recipeList.fetch()
      .then(function() {
        active.recipeModels = active.recipeList.models;
        self.render();
      });
  },

  render: function() {
    var target = this.$el;
    active.recipeModels.forEach(function(m) {
      target.append(new app.RecipeView( { model: m } ).render().html)
    })
  }

});

app.UserCookbookList = Backbone.Collection.extend({
  initialize: function(userId) {
    this.url = '/api/user/' + userId + '/cookbooks';
    return this;
  },
  model: app.Cookbook
})
// app.UserCookbookListView = Backbone.View.extend({
//   html: '',
//   el: '#user-cookbook-list',
//   template: _.template($('#cookbook-template').html()),
//   render: function() {
//     var self = this;
//     active.UserCookbooks.fetch().then(function() {
//       active.UserCOokbooks.models.forEach(function(m) {
//         self.$el.append(self.template(m.attributes));
//       });
//     })
//     this.html = this.template()
//   }
// })

$(document).ready(function() {
  app.userId = ' :3 ';
  active.UserCookbooks = new app.UserCookbookList(app.userId);
  active.Cookbook = new app.Cookbook(app.cookbookId)
  active.CookbookView = new app.CookbookView({ model: active.Cookbook });
})
