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
      $( this ).attr('src', '/assets/social-after-facebook-9da7838e6d2d559d60b354a464dd0c2bea279368502d4d76004a161814f6f32b.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-facebook-c2436b3437a87a4bb9ede976012016141113898d49795cc70d76788706f964b7.png');
    }
  );

  $('.social-icon__twitter').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-twitter-253edbc0b6a1c30024f2c001c77b36ac80fc73808bd2f31850dd91a278deedac.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-twitter-a995135dba2fa96c4d2943aaa5fee4ba9dbb1e77273d28f43299d84b348f9951.png');
    }
  );

  $('.social-icon__kas').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-kas-5ad76463c77d8c851d62dff2184bcc0d1d434f25a71e2f377f8eae736eb6f2eb.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-kas-806011bf766c5f7422282fd64eba9fe125b2138fbb4315c1d36ff12117555a67.png');
    }
  );


  $(window).scroll(function(){
    if($('#bottom-banner-wrapper').offset().top >= $('#hide-fixed-button').offset().top) {
      $('#bottom-banner-wrapper').css('margin-bottom','-100px');
    }else {
      $('#bottom-banner-wrapper').css('margin-bottom','0');
    };
  })
});
