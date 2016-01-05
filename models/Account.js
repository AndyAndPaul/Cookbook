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
