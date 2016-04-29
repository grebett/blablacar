(function ($) {
	window.addEventListener('DOMContentLoaded', function (event) {
		page('*', function (ctx, next) {
			window.scroll(0, 0);
			next();
		});

		page('/blablacar/about', function (ctx) {
			$('.page').css({display:'none'});
			$('#about').css({display:'block'});
		});

		page('/blablacar/values', function (ctx) {
			$('.page').css({display:'none'});
			$('#values').css({display:'block'});
		});

		page('/blablacar/tech', function (ctx) {
			$('.page').css({display:'none'});
			$('#tech').css({display:'block'});
		});

		page('/blablacar/references', function (ctx) {
			$('.page').css({display:'none'});
			$('#references').css({display:'block'});
		});

		page('*', function () {
			page.redirect('/blablacar/about');
		});

		page({
			hashbang: false
		});
	});
})(jQuery);
