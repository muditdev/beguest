new WOW().init();

/* anchor smooth scroll page */

/****



$(function () {
    $.srSmoothscroll()
});
/* anchor smooth scroll */

/*****

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



***/


/*mobo nav*/

$(function(){
  $('.nav-trigger').on('click', function(){
    $(this).toggleClass('open').toggleClass('fixme');
    $('.mobo-nav').toggleClass('show-me');
    });
  $('.mobo-nav nav ul li a').click(function(){
    $('.nav-trigger').removeClass('open').removeClass('fixme');
    $('.mobo-nav').removeClass('show-me');

  });
});
