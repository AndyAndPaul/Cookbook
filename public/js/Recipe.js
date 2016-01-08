/*
  Cookbook/public/js/Recipe.js
    Backbone recipe model & view

  Last edited
    by andy-j-d
    on 1/7/2016

  TODO:

*/

// namespaces
var app = app || {};
var active = active || {};

app.Recipe = Backbone.Model.extend({

  initialize: function() {
      this.idAttribute = '_id';
  }
});

/*
  pass the model
   var recipe     = new app.RecipeModel(json);
   var recipeView = new app.RecipeView({model: recipe})
*/
app.RecipeView = Backbone.View.extend({
  html: '',
  template: _.template($('#recipe-template').html()),

  initialize: function() {
    this.el.id = 'recipe_' + this.model.attributes._id;
    this.el.className = 'recipe';
  },

  deleteRecipe: function(e) {
    var that = this;
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this recipe!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes!",
      closeOnConfirm: false
    },
    function(){
      swal({
        title:"Recipe deleted.",
        type: "success"
      });

      that.url = '/api/recipe/' + app.cookbookId + '/' + that.model.attributes._id;
      $(that.el).remove();
      that.model.destroy({
        wait: true,
        success: function(model, res, options){ }
      });
    });
  },

  toggleRecipeInfo: function(e) {
    var id = e.target.parentNode.id.split('recipe_')[1];
    $('#info_' + id).toggle();
  },

  render: function() {
    console.log('el?');
    console.log(this);
    this.html = this.template(this.model.attributes);
    this.html = $(this.el).append(this.html);
    // call chaining
    return this;
  }
})

app.RecipeList = Backbone.Collection.extend({
  idAttribute: '_id',
  initialize: function(cookbookId) {
    // set the url before fetching
    this.url = '/api/recipe/' + app.cookbookId;

    // // call chaining
    return this;
  },
  model: app.Recipe
})

$(document).ready(function() {
  
  // fetch recipe list on page load
  active.recipeList = new app.RecipeList(app.cookbookId);
  console.log('fetched recipe list');

  // filter recipes by search
  $('#search').on('keyup', function(e) {
    console.log(active.recipeViews);
    var query = e.target.value;
    for(var view in active.recipeViews) {
      var attrs = active.recipeViews[view].model.attributes;
      if(attrs.name.toLowerCase().search(query) != -1) {
        $('#recipe_' + attrs._id).show();
      } else {
        $('#recipe_' + attrs._id).hide();
      }
    };
  });

})
