$(document).ready(function() {
	$(window).scroll(function() {
		if(this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}
	})

	$('.scroll-up-btn').click(function() {
		$('html').animate({scrollTop: 0});
	})

	$('.menu-btn').click(function() {
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	})

	let typed = new Typed('.typing', {
		strings: [
			"una desarrolladora.",
			"una chica en el planeta tierra.",
			"una estudiante.",
			"un intento de diseañadora gráfica.",
			"una artista.",
			"una desarrolladora front-end.",
			"una chica ocupada.",
			"... ni siquiera se lo que soy.",
			"una programadora de bots.",
			"una loca por las computadoras.",
			"todo lo que te puedas imaginar.",
			"otra programadora promedio."
		],
		typeSpeed: 30,
		backSpeed: 60,
		loop: false,
	})

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});

})