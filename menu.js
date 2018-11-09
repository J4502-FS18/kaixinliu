$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('#nav .container'). slideToggle(500);
  });

$(window).resize(function(){
  if ($(window).width()>500){
    $('#nav .container'). removeAttr('style');
  }
});
});
