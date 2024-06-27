let mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;

  const closeBtn = document.getElementById('menu-close');
  const header = document.querySelector('header');
  const menu = document.querySelector('.expand');

  if (mobileMenuOpen === true) {
    header.style.display = 'none';
    closeBtn.style.display = 'contents';
    menu.style.display = 'flex';
  } else {
    header.style.display = 'flex';
    closeBtn.style.display = 'none';
    menu.style.display = 'none';
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function rotateImage(direction) {
  if (direction == 'left') {
    /* go to previous slide */
    showSlides((slideIndex += 1));
  }

  if (direction == 'right') {
    /* go to next slide*/
    showSlides((slideIndex -= 1));
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('hero__carousel--slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
