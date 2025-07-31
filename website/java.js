document.addEventListener("DOMContentLoaded", () => {
  const images = document.getElementById('carouselImages');
  const totalSlides = images.children.length;
  let currentSlide = 0;

  function updateCarousel() {
    images.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateCarousel();
  }

  window.moveSlide = moveSlide;

  setInterval(() => moveSlide(1), 3000);
});