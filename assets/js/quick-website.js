/*

Theme: Quick – Website UI Kit (FREE)
Version: 1.1.0
Product Page: https://webpixels.io/themes/quick-website-ui-kit
License: MIT
Author: Webpixels
Author URI: https://webpixels.io

---

Copyright 2020 Webpixels

*/

//
// Sticky Navbar
//

var NavbarSticky = (function() {

	// Variables

	var $nav = $('.navbar-sticky'),
        navOffsetTop = 0,
		scrolling = false;


	// Methods

	function init($this) {

		// our current vertical position from the top
		var scrollTop = $(window).scrollTop(),
			navHeight = $this.outerHeight();

		if (scrollTop > (navOffsetTop + 200)) {
			$this.addClass('sticky');
			$("body").css("padding-top", navHeight + "px");
		} else {
			$this.removeClass('sticky');
			$("body").css("padding-top", "0");
		}
	}


	// Events

	if ($nav.length) {

		navOffsetTop = $nav.offset().top;
		
		$(window).on({
			'scroll': function() {
				scrolling = true;

				setInterval(function() {
					if (scrolling) {
						scrolling = false;

						// Sticky navbar init
                        init($nav);
					}
				}, 250);
			}
		})
	}
})();

//# sourceMappingURL=quick-website.js.map
