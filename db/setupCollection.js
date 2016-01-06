/*
  Cookbook/db/setupCollection.js
    database setup

  Last edited
    by pavasich
    on 1/5/2016
*/

var mongoose = require('mongoose');
require('./database');

var models = require('../models/Cookbook');

models.Cookbook.create({
    "name": "ADPV Recipes",
    "recipes": [],
    "accounts": []
  },
  function(err, cookbook) {
    console.log(cookbook);
})

mongoose.disconnect();
