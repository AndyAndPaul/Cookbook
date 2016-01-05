$(document).ready( function() {
  // Toggle display of search bar when icon is clicked
  $('#search-icon').on('click', function() {
    $('#site-title-bar-content').toggle();
    $('#search-bar').toggle();
    $('#main-navigation').hide();
  });
  // Toggle display of nav menu when icon is clicked
  $('#menu-icon').on('click', function() {
    $('#main-navigation').toggle();
    $('#search-bar').hide();
  });
})
