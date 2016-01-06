var app = app || {};
var active = active || {};

app.createRecipeView = Backbone.View.extend({
  el: '#add-recipe-form',
  events: {
    'click .create-recipe-button': 'createRecipe',
    'click .new-ingredient': 'addIngredientLine',
    'click .new-instruction': 'addInstructionLine',
    'click .new-tag': 'addTagLine',
    'change #add-image': 'uploadImage'
  },
  createRecipe: function() {
    console.log('adding recipe');
    var ingredients = [];
    $('.add-ingredient').each(function(rawIngredient) {
      console.log($(this));
      var cookedIngredient = {};
      cookedIngredient.quantity = {};
      cookedIngredient.quantity.whole = $(this).children('.qty-whole').val();
      cookedIngredient.quantity.numerator = $(this).children('.qty-numerator').val();
      cookedIngredient.quantity.denominator = $(this).children('.qty-denominator').val();
      cookedIngredient.unit = $(this).children('.unit').val();
      cookedIngredient.ingredient = $(this).children('.ingredient-name').val();
      ingredients.push(cookedIngredient);
    });
    var instructions = [];
    $('.add-instruction').each(function(instruction) {
      instructions.push($(this).val());
    });
    var tags = [];
    $('.add-tag').each(function(tag) {
      tags.push($(this).val());
    });
    var recipe = {
      name: $('#recipe-name').val(),
      prepTime: $('#prep-time').val(),
      cookTime: $('#cook-time').val(),
      ingredients: ingredients,
      instructions: instructions,
      tags: tags
    };
    console.log(recipe);
    var cookbookId = (this.collection.url.split('cookbook/')[1]);
    console.log(app.cookbookId);
    this.collection.url = '/api/recipe/' + app.cookbookId;
    this.collection.create(recipe);
    $('#add-recipe-form').hide();
  },
  addIngredientLine: function() {
    var html = _.template($('#add-ingredient-template').html());
    $('#add-ingredients-container').append(html);
  },
  addInstructionLine: function() {
    var html = _.template($('#add-instruction-template').html());
    $('#add-instructions-container').append(html);
  },
  addTagLine: function() {
    var html = _.template($('#add-tag-template').html());
    $('#add-tags-container').append(html);
  },
  uploadImage: function() {
    var image = document.getElementById('add-image').files[0];
    console.log(image);
  },
  initialize: function() {
    console.log('addRecipeView instantiated');
    console.log(this);
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
    if(!($( '#add-recipe-form' ).length)) { // display the form if it's not already displayed
      var html = _.template($('#add-recipe-template').html());
      $('#recipes-container').prepend(html);
      // scroll to form
      $('body, html').animate({ scrollTop: $('#add-recipe-form').offset().top -200 }, 1000);
      // instantiate Bakcbone view for form
      active.createRecipeView = new app.createRecipeView({
        collection: active.recipeList
      });
    }
  });
});
