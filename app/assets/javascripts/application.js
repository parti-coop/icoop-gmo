//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.validate
//= require unobtrusive_flash
//= require unobtrusive_flash_bootstrap

$(function(){
  $('form#new_petition').validate({
    ignore: ".ignore",

  });
});
