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
      $( this ).attr('src', '/assets/baggum-logo-after-f14a822c5a3cca0249d20748e0ed2bc286dc6299c2acde73d0af85b522c075b8.png');
    }, function() {
      $( this ).attr('src', '/assets/baggum-logo-before-4c2b3b24e8aeb4fe641b3988181957d2daa9fc6aaaad1a1f88498bd0df0e5a96.png');
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
