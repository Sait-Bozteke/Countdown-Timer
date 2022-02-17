let startingMinutes = 10;
let time = startingMinutes * 60;

let countdownE1 = document.querySelector("#countdown");

setInterval(updateCountdowntime, 1000);

function updateCountdowntime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownE1.innerHTML = `${minutes}:${seconds}`;

  time--;
}
