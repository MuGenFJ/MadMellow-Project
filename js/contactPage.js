function overlayMenu(){
    var nav = document.getElementById('overlay-navigation');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggle-btn');
    nav.classList.toggle('active');
    var nav = document.getElementById('toggle-btn-hover');
    nav.classList.toggle('active');
}
	
  
  // Toggle Light & Dark Style //
  const checkbox = document.getElementById('chk');
  const contactPage = document.getElementById('contact-page');

  checkbox.addEventListener('change', () => {
	  contactPage.classList.toggle('dark');
  });
  