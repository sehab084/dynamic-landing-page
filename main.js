// DOM Elements
const time = document.getElementById("time");

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();

function imageBackground() {
  let today = new Date(),
    sec = today.getSeconds();

  if (sec < 10) {
    document.body.style.backgroundImage = "url('image1.jpg')";
  } else if (sec < 20) {
    document.body.style.backgroundImage = "url('image2.jpg')";
  } else if (sec < 30) {
    document.body.style.backgroundImage = "url('image3.jpg')";
  } else if (sec < 40) {
    document.body.style.backgroundImage = "url('image4.jpg')";
  } else if (sec < 50) {
    document.body.style.backgroundImage = "url('image5.jpg')";
  } else {
    document.body.style.backgroundImage = "url('image6.jpg')";
  }
}
imageBackground();
