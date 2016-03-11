$(document).ready(function() {

  $('.hamburger').on('click', function(event) {
    $('nav').toggleClass('nav-open');
  });

  $('.nav-hamburger').on('click', function(event) {
    $('nav').toggleClass('nav-open');
  });

  $('.back').hide();

  $('.display').click(function(e) {
    e.preventDefault();
    $(this).siblings('.select').toggleClass('hidden-content');
    $(this).parent().siblings().hide();
    $(this).hide();
    $(this).siblings('.back').show();
  });



});

