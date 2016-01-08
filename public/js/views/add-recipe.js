/*
  Cookbook/public/js/views/add-recipes.js
    Backbone Recipe creation

  Last edited
    by andy-j-d
    on 1/6/2016

  TODO:

*/
var app = app || {};
var active = active || {};

app.createRecipeView = Backbone.View.extend({
  el: '#add-recipe-form',
  events: {
    'click .create-recipe-button': 'createRecipe',
    'click .new-ingredient': 'addIngredientLine',
    'click .new-instruction': 'addInstructionLine',
    'click .new-tag': 'addTagLine',
    'change #add-image': 'uploadImage',
    'click .delete-input': 'deleteInput'
  },
  createRecipe: function() {
    console.log('adding recipe');
    var ingredients = [];
    $('.add-ingredient').each(function(rawIngredient) {
      var self = this;
      ingredients.push({
        quantity: {
          whole:       $(self).children('.qty-whole').val(),
          numerator:   $(self).children('.qty-numerator').val(),
          denominator: $(self).children('.qty-denominator').val()
        },
        unit: $(self).children('.unit').val(),
        ingredient: $(self).children('.ingredient-name').val()
      });
    });
    var instructions = [];
    $('.add-instruction').each(function(instruction) {
      instructions.push($(this).val());
    });
    var tags = [];
    $('.add-tag').each(function(tag) {
      tags.push($(this).val());
    });
    if(!active.recipeImage) {
      active.recipeImage = '';
    }
    var recipe = {
      name: $('#recipe-name').val(),
      prepTime: $('#prep-time').val(),
      cookTime: $('#cook-time').val(),
      ingredients: ingredients,
      instructions: instructions,
      tags: tags,
      image: active.recipeImage
    };
    // var cookbookId = (this.collection.url.split('cookbook/')[1]);
    // this.collection.url = '/api/recipe/' + app.cookbookId;
    this.collection.create(recipe, {
      success: function(recipe) {
        active.recipeViews = active.recipeViews || {};
        $('#add-recipe-form').remove();
        var events = {};
        events['click button#delete_' + recipe.attributes._id] = 'deleteRecipe';
        events['click .toggle-recipe-info'] = 'toggleRecipeInfo';
        active.recipeViews['view_' + recipe.attributes._id] = new app.RecipeView( { model: recipe, events } );
        active.CookbookView.$el.prepend(active.recipeViews['view_' + recipe.attributes._id].render().html);
        active.recipeImage = false;
      }
    });

  },
  addIngredientLine: function() {
    var html = _.template($('#add-ingredient-template').html());
    $('#add-ingredients-container').append(html);
  },
  addInstructionLine: function() {
    active.stepNumber += 1;
    var html = _.template($('#add-instruction-template').html())({
      i: active.stepNumber
    });
    $('#add-instructions-container').append(html);
  },
  addTagLine: function() {
    var html = _.template($('#add-tag-template').html());
    $('#add-tags-container').append(html);
  },
  uploadImage: function() {
    var image = document.getElementById('add-image').files[0];
    if ( image ) {
      var reader = new FileReader();
      reader.onload = function(e) {
         active.recipeImage = e.target.result;
      };
      reader.readAsDataURL( image );
    }
  },
  deleteInput: function(e) {
    $(e.target).parent().remove();
    if(e.target.parentNode.className == 'single-instruction') {
      active.stepNumber -= 1;
    }
  },
  initialize: function() {
    console.log('addRecipeView instantiated');
    active.stepNumber = 1;
  }
  // validateInput: function() {
  //   var inputs = this.$el.children('input');
  //   console.log(inputs);
  //   var haveValues = false;
  //   var valid = false;
  //   for( var i = 0; i < inputs.length; i++ ) {
  //     var input = $(inputs)[i];
  //     value = $(input).val();
  //     console.log(value);
  //     if(value != null && value != undefined && value != '' ) {
  //       valid = true;
  //     } else {
  //       valid = false;
  //     }
  //   }
  //   if(valid) {
  //     $('.error').hide();
  //   } else {
  //     $('.error').html('<p>Please fill out all fields.</p>');
  //   }
  // }
});



$(document).ready( function() {
  // display add recipe form when 'add new' button is clicked
  $('#add-recipe-button').on('click', function() {
    if(!($( "#add-recipe-form" ).length)) { // display the form if it's not already displayed
      var html = _.template($('#add-recipe-template').html());
      $('#add-recipe-form-container').prepend(html);
      // scroll to form
      $('body, html').animate({ scrollTop: $("#add-recipe-form").offset().top -200 }, 1000);
      // instantiate Bakcbone view for form
      active.createRecipeView = new app.createRecipeView({
        collection: active.recipeList
      });
    } else {
      // toggle the form if it's already been displayed
      $('#add-recipe-form').toggle();
      $('body, html').animate({ scrollTop: $("#add-recipe-form").offset().top -200 }, 1000);
    }
  });
});
