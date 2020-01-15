$(document).ready(function() {
  //toggle btn
  $(".btn").click(function() {
    $(".nav-links").slideToggle(200);
    $(".btn").toggleClass("change");
  });
  $(".nav-links").click(function() {
    $(".nav-links").toggle();
    $(".nav-links").toggleClass("change");
    $(".btn").toggleClass("change");
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $(".back-home").fadeIn();
    } else {
      $(".back-home").fadeOut();
    }
  });
});
