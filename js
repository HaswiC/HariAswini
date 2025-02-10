// script.js
// Scroll-triggered animations for floating images
window.addEventListener('scroll', () => {
  const floatingImage1 = document.getElementById('floating-image-1');
  const floatingImage2 = document.getElementById('floating-image-2');
  const scrollY = window.scrollY;

  // Move images based on scroll position
  floatingImage1.style.transform = `translateY(${scrollY * 0.5}px)`;
  floatingImage2.style.transform = `translateY(${scrollY * 0.3}px)`;
});
