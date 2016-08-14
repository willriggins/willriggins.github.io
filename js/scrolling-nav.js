//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

(function ($) {
  $(document).ready(function(){

	// hide .navbar first
	$(".navbar").hide();
  $(".navbar-fixed-top").addClass("top-nav-collapse");

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(".navbar").offset().top > 350) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});


	});

});
  }(jQuery));
