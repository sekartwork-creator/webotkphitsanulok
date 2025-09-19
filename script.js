function updateImageSrc() {
  const desktopImage = document.getElementById('desktop-image');
  const mobileImage = document.getElementById('mobile-image');

  if (window.innerWidth <= 767) {
    desktopImage.style.display = 'none';
    mobileImage.style.display = 'block';
  } else {
    desktopImage.style.display = 'block';
    mobileImage.style.display = 'none';
  }
}

window.onload = updateImageSrc;
window.onresize = updateImageSrc;

$(document).ready(function(){
  $('.my-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});
