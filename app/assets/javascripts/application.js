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
      $( this ).attr('src', '/assets/social-after-facebook-61c10df54a5a3cb4a91f41b667378c2505097fd474af71f025b5c1314b37cd0b.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-facebook-6fcab9b573641fd9216fee67c17ee90721051cd74cecc89249e9721fe9e95a20.png');
    }
  );

  $('.social-icon__twitter').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-twitter-c2bfd85944516582d1c4cb76394017a0b35a0dd1848e3821fd63bbdd132f121e.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-twitter-c1f671b9ab38fc7faff8e632501448e57b55bc16b7e8d5c70030ab32992fc5a4.png');
    }
  );

  $('.social-icon__kas').hover(
    function() {
      $( this ).attr('src', '/assets/social-after-kas-6f2a18ffa182946348ea43a8ee53cb678403066f443a3133ce929c26559c27dd.png');
    }, function() {
      $( this ).attr('src', '/assets/social-before-kas-73035319278f215d13b565f88fd098b7307e416d552811b61895e6fa4a4af47b.png');
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
