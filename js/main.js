(function ($) {
	window.addEventListener('DOMContentLoaded', function (event) {
		page('*', function (ctx, next) {
			window.scroll(0, 0);
			next();
		});

		page('/blablacar/about', function (ctx) {
			$('.page').css({display:'none'});
			$('#about').css({display:'block'});
			console.log(ctx);
		});

		page('/blablacar/values', function (ctx) {
			$('.page').css({display:'none'});
			$('#values').css({display:'block'});
			console.log(ctx);
		});

		page('/blablacar/tech', function (ctx) {
			$('.page').css({display:'none'});
			$('#tech').css({display:'block'});
			console.log(ctx);
		});

		page('/blablacar/references', function (ctx) {
			$('.page').css({display:'none'});
			$('#references').css({display:'block'});
			console.log(ctx);
		});

		page('*', () => {
			page.redirect('/blablacar/about');
		});

		page({
			hashbang: false
		});
	});
})(jQuery);
