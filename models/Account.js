/*
  Cookbook/models/Account.js
    Schema for the 'Accounts' collection

  Last edited
    by andy-j-d
    on 1/5/2016

  TODO:
    ???
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// define schema
var Account = new Schema({
  username: String,
  password: String,
  cookbooks: [String]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
