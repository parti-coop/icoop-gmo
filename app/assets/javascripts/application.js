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
      image_url = location.protocol + "//" + location.hostname + "/images/baggum-logo-after.png";
      $( this ).attr('src', image_url);
      console.log(image_url)
    }, function() {
      image_url = location.protocol + "//" + location.hostname + "/images/baggum-logo-before.png";
      $( this ).attr('src', image_url);
      console.log(image_url)
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
