
  const carouselImages = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });

  // Optional: Auto slide every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  }, 3000);
