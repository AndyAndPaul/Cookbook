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
  initialize: function(args) {
    var self = this;
    this.url = '/api/cookbook/' + args.cookbookId;
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
  model: app.Model
});

$(document).ready(function() {
  active.collection = new app.Collection({
    cookbookId: app.cookbookId
  });
  console.log(active.collection.url)
});
