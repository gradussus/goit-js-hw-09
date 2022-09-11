import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const allDocument = document.querySelector('html');

let initialDate = null;
let timer = null;

startBtn.disabled = true;

startBtn.addEventListener('click', startTimer);

function startTimer() {
  let timeRemain = initialDate - Date.now();
  input.disabled = true;
  startBtn.disabled = true;

  Notiflix.Notify.success(
    `На порятунoк у тебе є ${Math.floor(
      timeRemain / 1000
    )} секунд, час - пішов!`
  );

  allDocument.addEventListener('click', click);

  console.log(convertMs(timeRemain));
  timer = setInterval(() => {
    let timeRemain = initialDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeRemain);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);

    if (
      days === 0 &&
      hours === 0 &&
      minutes === 0 &&
      3 < seconds &&
      seconds < 11
    ) {
      Notiflix.Notify.init({ timeout: 600 });
      Notiflix.Notify.warning(`В тебе ${seconds} секунд, козаче`);
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 3) {
      Notiflix.Notify.warning('Ти вже не врятуєшся!');
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 2) {
      Notiflix.Notify.warning('На стааарт...');
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 1) {
      Notiflix.Notify.warning('Увааааага...');
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      input.disabled = false;
      Notiflix.Notify.failure('Ховайся в жито - тобі каюк');
      allDocument.removeEventListener('click', click);
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Агов,ти шо, Марті Макфлай?)');
      startBtn.disabled = true;
    }
    if (selectedDates[0] > Date.now()) {
      startBtn.disabled = false;
    }

    initialDate = selectedDates[0];
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function click() {
  Notiflix.Notify.info(
    'Ну, тут клікай або не клікай - тобі не врятуватися. Хіба що, ти можеш оновити сторінку=)'
  );
}
