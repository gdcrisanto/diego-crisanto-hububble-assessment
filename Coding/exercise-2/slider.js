var slideCount = 1;
showSlides(slideCount);

function plusSlides(n) {
  showSlides(slideCount += n);
}

function currentSlide(n) {
  showSlides(slideCount = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slider-pagination-page");
  if (n > slides.length) {slideCount = 1}
  if (n < 1) {slideCount = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideCount-1].style.display = "block";
  dots[slideCount-1].className += " active";
}