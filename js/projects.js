function overlayMenu(){
    var nav = document.getElementById('overlay-navigation');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggle-btn');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggle-btn-hover');
    nav.classList.toggle('active');
}
	
	
	// CAROUSEL-SLIDER Portfolio individual pages//
$('.sliders').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<span class="arrow-prev"><i class="fas fa-chevron-left"></i></span>',
	nextArrow: '<span class="arrow-next"><i class="fas fa-chevron-right"></i></span>',
	responsive: [
	  {
		breakpoint: 1258,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 795,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
  
  // Toggle Light & Dark Style //
  const checkbox = document.getElementById('chk');
  const bistroleduc = document.getElementById('bistroleduc');
  const contactPage = document.getElementById('contact-page');

  checkbox.addEventListener('change', () => {
	  bistroleduc.classList.toggle('dark');
	  contactPage.classList.toggle('dark');
  });
  