const startBnt = document.querySelector('[data-start]');
const stopBnt = document.querySelector('[data-stop]');
const body = document.querySelector('body');
stopBnt.disabled = true;

startBnt.addEventListener('click', startFn);
stopBnt.addEventListener('click', stopFn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomBodyBgcColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function startFn() {
  randomBodyBgcColor();
  timer = setInterval(() => {
    randomBodyBgcColor();
  }, 1000);
  stopBnt.disabled = false;
  startBnt.disabled = true;
}

function stopFn() {
  startBnt.disabled = false;
  stopBnt.disabled = true;
  clearInterval(timer);
}
