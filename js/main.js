(function ($) {
	window.addEventListener('DOMContentLoaded', function (event) {
		// side nav
		$(".button-collapse").sideNav();

		// routing
		page('*', function (ctx, next) {
			window.scroll(0, 0);
			next();
		});

		page('/blablacar/about', function (ctx) {
			$('.page').css({display:'none'});
			$('#about').css({display:'block'});
			$('.button-collapse').sideNav('hide');
		});

		page('/blablacar/values', function (ctx) {
			$('.page').css({display:'none'});
			$('#values').css({display:'block'});
			$('.button-collapse').sideNav('hide');
		});

		page('/blablacar/tech', function (ctx) {
			$('.page').css({display:'none'});
			$('#tech').css({display:'block'});
			$('.button-collapse').sideNav('hide');
		});

		page('/blablacar/references', function (ctx) {
			$('.page').css({display:'none'});
			$('#references').css({display:'block'});
			$('.button-collapse').sideNav('hide');
		});

		page('*', function () {
			page.redirect('/blablacar/about');
		});

		page({
			hashbang: false
		});
	});
})(jQuery);
