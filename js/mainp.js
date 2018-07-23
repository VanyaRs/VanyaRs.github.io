$(document).ready(function () {
  $(window).scroll(function(){
 if ($(this).scrollTop() > 100) {
 $('.scrollup').fadeIn();
 } else {
 $('.scrollup').fadeOut();
 }
 }); 
 
 $('.scrollup').click(function(){
 $("html, body").animate({ scrollTop: 0 }, 600);
 return false;
 });
 $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
})