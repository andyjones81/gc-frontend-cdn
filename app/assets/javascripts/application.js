/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


  $('.gc-return-to-top').click(function () {
    var tgttop = $('header');
    scrolltop(tgttop).focus();
    return false;
  });

  // Scroll to top animation
  function scrolltop(tgttop) {
    var pagepos = tgttop.offset();
    var posheight = pagepos.top;
    $('body,html').animate({scrollTop: posheight}, 800);
  }