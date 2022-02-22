const hourHand = document.querySelector('#hour');
const minHand = document.querySelector('#min');
const secHand = document.querySelector('#sec');
const tick = new Audio('./ClockTick.mp3');

const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

let hourDegrees = (hour * 30) + Math.floor(min / 2);
let minDegrees = (min * 6) + Math.floor(sec / 10);
let secDegrees = sec * 6;

const moveHands = () => {
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  secHand.style.transform = `rotate(${secDegrees}deg)`;
  tick.currentTime = 0;
  tick.play();
}

const keepTime = () => {
  secDegrees += 6;
  if (secDegrees % 60 === 0) {
    minDegrees += 1;
  }
  if (secDegrees % 720 === 0) {
    hourDegrees += 1;
  }
  moveHands();
}

moveHands();
setInterval(keepTime, 1000);