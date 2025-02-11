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

// Link Click Tracking with Geolocation
document.querySelectorAll('[data-track-location]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const linkName = this.dataset.trackLocation;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const trackingData = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            link: linkName,
            timestamp: new Date().toISOString()
          };

          // Log tracking data to console (replace with your backend API call)
          console.log('Tracking Data:', trackingData);

          // Proceed to original link after tracking
          window.open(this.href, '_blank');
        },
        (error) => {
          console.error('Geolocation error:', error);
          window.open(this.href, '_blank');
        }
      );
    } else {
      window.open(this.href, '_blank');
    }
  });
});
