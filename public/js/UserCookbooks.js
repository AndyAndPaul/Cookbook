/*
  Cookbook/public/js/UserCookbooks.js
    Backbone user cookbook list view

  Last edited
    by pavasich
    on 1/6/2016

  TODO:
    all of it
*/

// namespaces
var app = app || {}; // constructors go here
var active = active || {}; // instantiated objects go here

Backbone.Model.idAttribute = '_id';

$(document).ready(function() {
    app.userId = ' :3 ';
    active.UserCookbooks = new app.UserCookbookList(app.userId);
})
