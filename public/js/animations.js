$(document).ready( function() {
  $('#search-icon').on('click', function() {
    $('#site-title-bar-content').toggle();
    $('#search-bar').toggle();
  });
  $('#menu-icon').on('click', function() {
    $('#main-navigation').toggle();
  });
})
