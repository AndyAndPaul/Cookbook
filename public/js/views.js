var app = app || {};
var active = active || {};

app.addRecipeView = Backbone.View.extend({
  el: $('#add-recipe'),
  events: {
    'click button': 'addRecipe',
    'blur input': 'validateInput'
  },
  addRecipe: function() {
    console.log(this);
    if(confirmation) {
      var data = {
        // ingredients: $('#p-ingredients').val(),
        // type: $('#p-type').val(),
        // topping: $('#p-topping').val(),
        // syrup: $('#p-syrup').val(),
        // instructions: $('#p-instructions').val(),
        // time: $('#p-time').val()
      };
      this.collection.create(data);
      this.$el.children('input').val('');
    }
  },
  validateInput: function() {
    var inputs = this.$el.children('input');
    console.log(inputs);
    var haveValues = false;
    var valid = false;
    for( var i = 0; i < inputs.length; i++ ) {
      var input = $(inputs)[i];
      value = $(input).val();
      console.log(value);
      if(value != null && value != undefined && value != '' ) {
        valid = true;
      } else {
        valid = false;
      }
    }
    if(valid) {
      $('.error').hide();
    } else {
      $('.error').html('<p>Please fill out all fields.</p>');
    }
  },
  initialize: function() {
    console.log('addRecipeView instantiated');
  }
});

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
    var models = this.collection.models;
    console.log(this.collection.models);
    models.forEach(function(m) {
      new app.ModelView({
        model: m,
        el: that.el
      });
    });
  }
});

app.ModelView = Backbone.View.extend({
  events: {
    'click .remove': 'deleteModel',
  },
  deleteModel: function() {
    console.log(this);
  },
  initialize: function() {
    var self = this;
    console.log('Model view dynamically generated.');
    this.deleteButton = document.createElement('button');
    this.deleteButton.innerHTML = 'Delete recipe'
    this.deleteButton.className = 'remove';
    this.render();
  },
  render: function() {
    var html = _.template($('#recipe-template').html())(this.model.attributes);
    this.$el.append(html);
    this.$el.append(this.deleteButton);
  }
});
