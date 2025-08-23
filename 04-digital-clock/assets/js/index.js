const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timeFormat = document.getElementById("am-pm");

function formatTime(unit) {
  return unit.toString().padStart(2, "0");
}

setInterval(() => {
  const currentTime = new Date();

  let hour = currentTime.getHours();
  const ampm = hour >= 12 ? "PM" : "AM"; // AM/PM logic
  hour = hour % 12 || 12; // 24hr to 12hr + fix for 0 = 12

  hours.textContent = formatTime(hour);
  minutes.textContent = formatTime(currentTime.getMinutes());
  seconds.textContent = formatTime(currentTime.getSeconds());
  timeFormat.textContent = ampm;
}, 1000);
