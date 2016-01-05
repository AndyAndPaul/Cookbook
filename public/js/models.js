// namespaces
var app = app || {}; // constructors go here
var active = active || {}; // instantiated objects go here

app.Model = Backbone.Model.extend({
  initialize: function() {
    console.log('A model was dynamically generated.');
  }
});

Backbone.Model.idAttribute = "_id";

app.Collection = Backbone.Collection.extend({
  initialize: function() {
    var self = this;
    console.log('Collection');
    this.fetch({reset: true});
    this.on('sync', function() {
      console.log('sync event');
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('change', function() {
      console.log('change event');
      var view = new app.CollectionView({
        collection: self
      });
    });
  },
  model: app.Model,
  url: '/api'
});

$(document).ready(function() {
  active.collection = new app.Collection();
  active.createRecipeView = new app.addRecipeView({
    collection: active.collection
  });
});
