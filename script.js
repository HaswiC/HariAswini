// script.js

// ========================
// Countdown Timer
// ========================
const weddingDate = new Date("2025-02-17T04:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update DOM elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Handle timer expiration
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "The wedding has started!";
  }
}

// Initialize timer
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately on page load

// ========================
// Image Orientation Detection
// ========================
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-container img");

  images.forEach((img) => {
    // Check if image is already loaded
    if (img.complete) {
      setOrientationClass(img);
    } else {
      img.addEventListener("load", () => setOrientationClass(img));
    }
  });

  function setOrientationClass(image) {
    if (image.naturalWidth > image.naturalHeight) {
      image.classList.add("horizontal"); // Landscape orientation
    } else {
      image.classList.add("vertical"); // Portrait orientation
    }
  }
});
