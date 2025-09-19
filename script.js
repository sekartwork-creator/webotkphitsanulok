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
