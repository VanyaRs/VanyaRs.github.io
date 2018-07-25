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
 $(window).load(function() {
    setTimeout(function() {
      $('.preloader').fadeOut('slow', function() {});
    }, 500);
 
  });
 $(window).scroll(function(){
    if  ($(window).scrollTop() > 200)
        $('#slidebox').animate({'left':'0px'},500);
        else
        $('#slidebox').stop(true).animate({'left':'-230px'},500);   
    });
})