// Countdown Timer
const weddingDate = new Date("2025-02-17T04:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "The wedding has started!";
  }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Automatically add classes based on image orientation
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-container img");

  images.forEach((img) => {
    img.onload = function () {
      if (img.naturalWidth > img.naturalHeight) {
        img.classList.add("horizontal"); // Landscape image
      } else {
        img.classList.add("vertical"); // Portrait image
      }
    };
  });
});
