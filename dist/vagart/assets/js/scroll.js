$("#video-start").click(function() {
  $('html,body').animate({
      scrollTop: $("#video-end").offset().top},
    'slow');
});
