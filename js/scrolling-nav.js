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

// hiding nav bar while scrolling

$(function () {
	$(window).scroll(function () {

    if ($(this).scrollTop() <= $('#about').offset().top) {
      $('.navbar').fadeOut(500);
    }
    if ($(this).scrollTop() > $('#about').offset().top) {
			$('.navbar').fadeIn(500);
		}
	});
});
