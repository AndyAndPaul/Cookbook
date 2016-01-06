var app = app || {};
var active = active || {};

app.Recipe = Backbone.Model.extend({
  // needs to have a cookbook ID

  initialize: function(cookbookId) {
    this.idAttribute = "_id";

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

  initialize: function() {
    this.render();
  },

  template: _.template($('#recipe-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + cookbookId;
    this.fetch({reset: true});
  },
  model: app.Recipe
});
