/*
  Cookbook/old/single-cookbook.js
    Backbone views

  Last edited
    by pavasich
    on 1/6/2016

  TODO:

*/

var app = app || {};
var active = active || {};

app.CollectionView = Backbone.View.extend({
  el: $('#recipes-container'),
  initialize: function() {
    console.log('Collection view initialized');
    this.$el.html('');
    this.render();
  },
  render: function() {
    var that = this;
    console.log('collection view rendering');
    console.log(this.collection);
    var models = this.collection.models[0].attributes.recipes;
    models.forEach(function(m) {
      new app.ModelView({
        model: m,
        el: that.el
      });
    });
  }
});

app.ModelView = Backbone.View.extend({
  initialize: function() {
    var self = this;
    this.render();
  },
  render: function() {
    var html = _.template($('#recipe-template').html())(this.model);
    this.$el.append(html);
  }
});
