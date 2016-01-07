/*
  Cookbook/db/setupRecipes.js
    database setup

  Last edited
    by pavasich
    on 1/7/2016
*/

require('./database');
var models = require('../models/Cookbook');

models.Cookbook.find({name: 'ADPV Recipes'}, function(err, cookbook) {
  cookbook = cookbook[0];

  models.Recipe.create({
    'name': 'Italian Antipasto Squares',
    'image': '/img/antipasto.jpg',
    'prepTime': 20,
    'cookTime': 85,
    'ingredients': [
      {
        ingredient: 'Crescent Rolls',
        quantity: {
          whole: 2,
          numerator: 0,
          denominator: 1
        },
        unit: 'Tubes'
      },
      {
        ingredient: 'Ham, thinly sliced',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'Salami',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'Pepperoni',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'Swiss Cheese, thinly sliced',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'American Cheese, thinly sliced',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'Provolone Cheese, thinly sliced',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'lb'
      },
      {
        ingredient: 'Eggs',
        quantity: {
          whole: 3,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      },
      {
        ingredient: 'Jar of Roasted Red Peppers',
        quantity: {
          whole: 12,
          numerator: 0,
          denominator: 1
        },
        unit: 'oz'
      },
      {
        ingredient: 'Sliced Black Olives',
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: 'small can'
      },
      {
        ingredient: 'Black Pepper',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'teaspoon'
      },
      {
        ingredient: 'Garlic Powder',
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'teaspoon'
      }
    ],
    'instructions': [
      'Spray 9x13 pan with Pam.',
      'Unroll one tube of rolls and spread them out on bottom pan, sealing seams.',
      'Alternate layers of meats and cheeses. (I like Ham/Swiss, Salami/American, Pepperoni/Provolone)',
      'Beat 2 eggs with pepper and garlic powder and pour over layers.',
      'Drain peppers, slice in strips, and place on top of layers.',
      'Sprinkle with olives.',
      'Unroll tube of rolls, place on top (sealing seams if triangle style), and spread to edges.',
      'Brush top of rolls with 1 beaten egg yolk.',
      'Bake at 350 for 25 minutes covered with foil.',
      'Remove foil and bake additional 30 minutes.'
    ],
    'tags': [
      'italian',
      'appetizer'
    ],
    'authors': ['Carol Vasich']
  }, function(err, recipe) {
    if (err) console.log(err)
    else {
      cookbook.recipes.push(recipe);
      cookbook.save();
    }
  });

  models.Recipe.create({
    'name': 'Mini Baked Ham Sandwiches',
    'image': '/img/hamsammies.jpg',
    'prepTime': 10,
    'cookTime': 15,
    'ingredients': [
      {
        ingredient: "King's Hawaiian Original Rolls",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: '12-pack'
      },
      {
        ingredient: 'Deli Ham, shaved',
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: 'lb'
      },
      {
        ingredient: 'Swiss Cheese, thinly sliced',
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: 'lb'
      },
      {
        ingredient: 'Butter',
        quantity: {
          whole: 1,
          numerator: 1,
          denominator: 2
        },
        unit: 'sticks'
      },
      {
        ingredient: 'Dijon mustard',
        quantity: {
          whole: 1,
          numerator: 1,
          denominator: 2
        },
        unit: 'tablespoon'
      },
      {
        ingredient: 'Worcestershire sauce',
        quantity: {
          whole: 1,
          numerator: 1,
          denominator: 2
        },
        unit: 'teaspoon'
      },
      {
        ingredient: 'Minced Onion',
        quantity: {
          whole: 1,
          numerator: 1,
          denominator: 2
        },
        unit: 'teaspoon'
      }
    ],
    'instructions': [
      'Melt butter and mix in mustard, sauce, and onion',
      'Cut the entire pack of rolls in half, horizontally (keeping all top and bottom halves separated in tact).',
      'In a 9x13 pan, place bottom half of rolls and cover with ham and cheese.',
      'Cover ham and cheese stacks with top half of rolls.',
      'Drizzle butter mixture over top of rolls, making sure onion is evenly distributed.',
      'Refrigerate over night.',
      'Bake at 350 for 15-20 minutes and, once finished, separate for serving'
    ],
    'tags': [
      'sandwich',
      'appetizer'
    ]
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
    cookbook.save();
  });
  models.Recipe.create({
    'name': 'Mexican Fudge Cheese Squares',
    'image': '/img/cheesefudge.jpg',
    'prepTime': 20,
    'cookTime': 30,
    'ingredients': [
      {
        ingredient: "Shredded Cheddar Cheese",
        quantity: {
          whole: 8,
          numerator: 0,
          denominator: 1
        },
        unit: 'oz'
      },
      {
        ingredient: "Shredded Monterey Jack",
        quantity: {
          whole: 8,
          numerator: 0,
          denominator: 1
        },
        unit: 'oz'
      },
      {
        ingredient: "Eggs",
        quantity: {
          whole: 3,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      },
      {
        ingredient: "Salsa Verde",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 3
        },
        unit: 'cup'
      }
    ],
    'instructions': [
      'Mix cheeses together.',
      'Put 1/2 of cheese mixture in 8x8 glass baking dish.',
      'Beat the eggs.',
      'Stir salsa into eggs.',
      'Pour egg mixture over cheese.',
      'Top with remaining cheese.',
      'Bake uncovered in preheated oven at 350 degrees for 30 minutes.',
      'Cut into squares and serve with tortilla chips.'
    ],
    'tags': [
      'appetizer',
      'cheese',
      'mexican'
    ],
    'authors': ['Carol Vasich']
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
    cookbook.save();
  });

  models.Recipe.create({
    'name': 'Protein Bars',
    'prepTime': 20,
    'cookTime': 35,
    'ingredients': [
      {
        ingredient: "Soy ProteinPpowder",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: 'cup'
      },
      {
        ingredient: "Oat Bran",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Whole-wheat Flour",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Wheat germ",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'cup'
      },
      {
        ingredient: "Kosher salt",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'teaspoon'
      },
      {
        ingredient: "Raisins",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Dried Cherries",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Dried Blueberries",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Dried Apricots",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Soft Silken Tofu",
        quantity: {
          whole: 12.3,
          numerator: 0,
          denominator: 1
        },
        unit: 'oz'
      },
      {
        ingredient: "Unfiltered Apple Juice",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup'
      },
      {
        ingredient: "Dark Brown Sugar",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'cup, packed'
      },
      {
        ingredient: "Eggs, beaten",
        quantity: {
          whole: 2,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      },
      {
        ingredient: "Natural Peanut Butter",
        quantity: {
          whole: 0,
          numerator: 2,
          denominator: 3
        },
        unit: 'cup'
      },
      {
        ingredient: "Canola oil, for pan",
        quantity: {
          whole: 0,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      }
    ],
    'instructions': [
      'Line the bottom of a 13x9 glass baking dish with parchment paper and lightly coat with canola oil.',
      'Set aside. Preheat oven to 350 degrees F.',
      'In a large mixing bowl, combine the protein powder, oat bran, wheat flour, wheat germ, and salt. Set aside.',
      'Coarsely chop the rasins, dried cherries, blueberries, and apricots. Place in a small bowl and set aside.',
      'In a third mixing bowl, whisk the tofu until smooth.',
      'Add the apple juice, brown sugar, eggs, and peanut butter, one at a time, and whisk to combine after each addition.',
      'Add this to the protein powder mixture and stir well to combine.',
      'Fold in the dried fruit.',
      'Spread evenly in the prepared baking dish and bake in the oven for 35 minutes or until internal temperature reaches 205 degrees F.',
      'Remove from oven and cool completely before cutting into squares.',
      'Store in an airtight container for up to a week.'
    ],
    'tags': [
      'protein',
      'healthy',
      'good eats'
    ],
    'authors': ['Alton Brown']
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
    cookbook.save();
  });

  models.Recipe.create({
    'name': 'Apple Pancake',
    'image': '/img/applepancake.jpg',
    'prepTime': 30,
    'cookTime': 10,
    'ingredients': [
      {
        ingredient: "Large Golden Delicious Apple",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      },
      {
        ingredient: "Butter",
        quantity: {
          whole: 4,
          numerator: 0,
          denominator: 1
        },
        unit: 'tablespoons'
      },
      {
        ingredient: "Cinnamon",
        quantity: {
          whole: 1,
          numerator: 0,
          denominator: 1
        },
        unit: 'teaspoon'
      },
      {
        ingredient: "Sugar",
        quantity: {
          whole: 0,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      },
      {
        ingredient: "All-Purpose Flour",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 3
        },
        unit: 'cup'
      },
      {
        ingredient: "Baking Powder",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 2
        },
        unit: 'teaspoon'
      },
      {
        ingredient: "Salt",
        quantity: {
          whole: 0,
          numerator: 1,
          denominator: 4
        },
        unit: 'teaspoon'
      },
      {
        ingredient: "Eggs, separated",
        quantity: {
          whole: 4,
          numerator: 0,
          denominator: 1
        },
        unit: ''
      }
    ],
    'instructions': [
      'Peel, core, and cut apple into 1/4 inch slices; set aside',
      'In a 10-inch oven-save skillet, melt butter over medium-low heat.',
      'Stir in cinnamon and 1/4 C sugar; remove from heat.',
      'Arrange apple slices in butter mixture, overlapping slices slightly.',
      'Return skillet to heat; cook over low heat 10 minutes or until apple are tender-crisp.',
      'Meanwhile, preheat oven to 400 degrees.',
      'In medium bowl with fork, beat flour, milk, baking powder, salt, and egg yolks until blended; set aside.',
      'In a small bowl with mixer at high speed, beat egg whites and 1/3 C sugar until soft peaks form.',
      'Fold egg-white mixture into egg-yolk mixture.',
      'Spread egg mixture evenly over apple slices in skillet.',
      'Bake 10 minutes or until pancake is golden brown.',
      'Remove skillet from oven.',
      'With a metal spatula, loosen edge of pancake from skillet.',
      'Carefully invert pancake onto warm platter; serve immediately.',
      'Makes 8 servings.'
    ],
    'tags': [
      'breakfast',
      'fancy'
    ],
    'authors': ['MVasich 1996']
  }, function(err, recipe) {
    cookbook.recipes.push(recipe);
    cookbook.save();
  });
  // 
  // models.Recipe.create({
  //   'name': '',
  //   'prepTime': ,
  //   'cookTime': ,
  //   'ingredients': [
  //     {
  //       ingredient: "",
  //       quantity: {
  //         whole: 1,
  //         numerator: 0,
  //         denominator: 1
  //       },
  //       unit: ''
  //     }
  //   ],
  //   'instructions': [
  //
  //   ],
  //   'tags': [
  //   ]
  // }, function(err, recipe) {
  //   cookbook.recipes.push(recipe);
  // });
});
