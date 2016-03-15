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

  $('#yoda-detail').hide();
  $('#snack-detail').hide(); 
  $('#quiz-detail').hide();
  $('#countries-detail').hide();
  $('#band-detail').hide();  
  $('#flick-detail').hide();
  $('#wait-detail').hide();
  $('#abg-detail').hide();
  $('#flappy-detail').hide();
  $('#portraits-detail').hide();
  $('#grocery-detail').hide();
  $('#hot-detail').hide();

  $('#yoda-img').click(function() {
    $('#yoda-detail').show();
    $('#yoda-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#snack-img').click(function() {
    $('#snack-detail').show();
    $('#snack-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#quiz-img').click(function() {
    $('#quiz-detail').show();
    $('#quiz-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#countries-img').click(function() {
    $('#countries-detail').show();
    $('#countries-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#band-img').click(function() {
    $('#band-detail').show();
    $('#band-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#flick-img').click(function() {
    $('#flick-detail').show();
    $('#flick-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#wait-img').click(function() {
    $('#wait-detail').show();
    $('#wait-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#abg-img').click(function() {
    $('#abg-detail').show();
    $('#abg-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#flappy-img').click(function() {
    $('#flappy-detail').show();
    $('#flappy-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#portraits-img').click(function() {
    $('#portraits-detail').show();
    $('#portraits-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#grocery-img').click(function() {
    $('#grocery-detail').show();
    $('#grocery-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  $('#hot-img').click(function() {
    $('#hot-detail').show();
    $('#hot-detail').velocity({
        height: '100%',
        opacity: 1
    }, 2000);
    $('.detail-text').velocity({
        opacity: 1
    }, 2000);
    $('.detail-img').velocity({
        opacity: 1
    }, 2000);
  });

  // Hides project detail container
  $('.cancel').click(function() {
    $(this).parent().velocity({
      height: '0',
      opacity: 0
    }, 2000, function() {
      $(this).hide();
    });
    $('.detail-text').velocity({
      opacity: 0
    }, 1000);
    $('.detail-img').velocity({
      opacity: 0
    }, 1000);
  });

  // Scrolls to project detail container
  $('.port-flex').find('img').click(function() {
    $('#portfolio-section').find('h2').animatescroll();
  });

});

