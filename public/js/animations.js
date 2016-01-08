$(document).ready( function() {
  // toggle search bar on icon click
  $('#search-icon').on('click', function() {
    $('#site-title-bar-content').toggle();
    $('#search-bar').toggle();
  });
  // toggle menu on icon click
  $('#menu-icon').on('click', function() {
    $('#main-navigation').toggle();
  });
})
