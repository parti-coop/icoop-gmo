//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.validate
//= require unobtrusive_flash
//= require unobtrusive_flash_bootstrap

$(function(){
  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $('form#new_petition').validate({
    ignore: ".ignore"
  });

  $('.baggum-logo').hover(
    function() {
      $( this ).attr('src', '/assets/baggum-logo-after.png');
    }, function() {
      $( this ).attr('src', '/assets/baggum-logo-before.png');
    }
  );

  $('.social-icon__facebook').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-facebook.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-facebook.png');
    }
  );

  $('.social-icon__twitter').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-twitter.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-twitter.png');
    }
  );

  $('.social-icon__kas').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-kas.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-kas.png');
    }
  );

});
