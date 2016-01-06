var app = app || {}; // constructors go here
var active = active || {}; // instantiated objects go here

app.Cookbook = Backbone.Model.extend({
  initialize: function() {
    this.idAttribute = "_id";
  }
})

app.CookbookView = Backbone.View.extend({

  el: '#recipes-container',

  that: this,

  initialize: function() {
    console.log('Cookbook view initialized');
    this.$el.html('');
    this.recipeList = new app.RecipeList(this.id); // cookbook id
    this.recipeList.fetch();
    this.render();
  },

  render: function() {
    this.recipeList.forEach(function(m) {
      this.addRecipe(m)
    })
  },

  addRecipe: function(recipe) {
    var recipeView = new app.RecipeView({ model: recipe })
    that.$el.append(recipeView.render().el)
  }

});
