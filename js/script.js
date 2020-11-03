
function overlayMenu() {
	var nav = document.getElementById('overlay-navigation');
	nav.classList.toggle('active');
	var nav = document.getElementById('toggle-btn');
	nav.classList.toggle('active');
	var nav = document.getElementById('toggle-btn-hover');
	nav.classList.toggle('active');
}

// Preloader //
// const preloader = document.querySelector('.preloader');

// document.addEventListener('DOMContentLoaded', (e) => {
// 	setTimeout(() => {
// 		preloader.classList.add('display-none');
// 	}, 5200);
// })

// Filter Grid //
$(document).ready(function () {

	$('.grid-container').isotope({
		itemSelector: '.grid-item',
	});

	// filter items on button click
	$('.filter-menu').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid-container').isotope({ filter: filterValue });
		$('.filter-menu li').removeClass('active');
		$(this).addClass('active');
	});
})

// CAROUSEL-SLIDER //
$('.slider-area').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5.2,
	slidesToScroll: 1,
	prevArrow: '<span class="arrow-prev">PREV <i class="line"></i></span>',
	nextArrow: '<span class="arrow-next"><i class="line"></i> NEXT</span>',
	responsive: [

		{
			breakpoint: 1650,
			settings: {
				slidesToShow: 4.2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1258,
			settings: {
				slidesToShow: 3.2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 795,
			settings: {
				slidesToShow: 2.2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1.2,
				slidesToScroll: 1
			}
		}
	]
});



// Toggle Light & Dark Style //
const checkbox = document.getElementById('chk');
const home = document.getElementById('home');
const homebg = document.getElementById('sectionbg');
const aboutbg = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
//   const testimonials = document.getElementById('testimonials');
const contact = document.getElementById('contact');
const projects = document.getElementById('projects');

checkbox.addEventListener('change', () => {
	homebg.classList.toggle('dark');
	aboutbg.classList.toggle('dark');
	home.classList.toggle('dark');
	portfolio.classList.toggle('dark');
	//   testimonials.classList.toggle('dark');
	contact.classList.toggle('dark');
	// projects.classList.toggle('dark');
});
