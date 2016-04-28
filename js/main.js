(function ($) {
	window.addEventListener('DOMContentLoaded', function (event) {
		page('/about', function (ctx) {
			$('.page').css({display:'none'});
			$('#about').css({display:'block'});
			console.log(ctx);
		});

		page('/values', function (ctx) {
			$('.page').css({display:'none'});
			$('#values').css({display:'block'});
			console.log(ctx);
		});

		page('/tech', function (ctx) {
			$('.page').css({display:'none'});
			$('#tech').css({display:'block'});
			console.log(ctx);
		});

		page('/references', function (ctx) {
			$('.page').css({display:'none'});
			$('#references').css({display:'block'});
			console.log(ctx);
		});

		page('*', () => {
			page.redirect('/about');
		});

		page({
			hashbang: false
		});
	});
})(jQuery);
