const stopWatchText = document.querySelector('.stop-watch-text');
const milisecondsText = document.querySelector('.miliseconds');
const secondsText = document.querySelector('.seconds');
const minutesText = document.querySelector('.minutes');
const buttonsStart = document.querySelector('.buttons-start');
const buttonsStop = document.querySelector('.buttons-stop');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const flagButton = document.querySelector('#flag');
const repeatButton = document.querySelector('#repeat');
const listItemMain = document.querySelector('.list-item-main');

let Interval,lastInterval,lastTime;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let timeList = [];
let lastMiliseconds = 0;
let lastSeconds = 0;
let lastMinutes = 0;
let count = 0;

addEventListeners();


function addEventListeners() {
    playButton.addEventListener("click", changeButtons);
    pauseButton.addEventListener("click", changeButtons);
    repeatButton.addEventListener("click", repeatTimer);
    flagButton.addEventListener("click", addList);
}

function changeButtons(e) {
    if (e.target.id === "play") {
        buttonsStop.style.display = "none";
        buttonsStart.style.display = "flex";
        startTimer();
    }
    else {
        buttonsStop.style.display = "flex";
        buttonsStart.style.display = "none";
        stopTimer();
    }
    e.preventDefault();
}

function startTimer() {
    clearInterval(Interval);
    Interval = setInterval(startStopWatch, 10);
}
function stopTimer() {
    clearInterval(Interval);
    clearInterval(lastInterval);
}

function repeatTimer() {
    clearInterval(Interval);
    clearAllTimer();
}

function addList(e) {
    clearInterval(lastInterval);
    lastInterval = setInterval(lastStopWatch, 10);
    count++;
    addListUI();
    clearLastTimer();
    e.preventDefault();
}

function startStopWatch() {
    miliseconds++;
    if (miliseconds <= 9) {
        milisecondsText.textContent = "0" + miliseconds;
    }
    if (miliseconds > 9) {
        milisecondsText.textContent = miliseconds;
    }
    if (miliseconds >= 99) {
        seconds++;
        miliseconds = 0;
        secondsText.textContent = "0" + seconds;
    }
    if (seconds > 9) {
        secondsText.textContent = seconds;
    }
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
        minutesText.textContent = "0" + minutes;
    }
}

function lastStopWatch() {
    lastMiliseconds++;
    if (lastMiliseconds > 99) {
        lastSeconds++;
        lastMiliseconds = 0;
    }
    if (lastSeconds >= 60) {
        lastMinutes++;
        lastSeconds = 0;
    }
    console.log("Hello World");
}

function clearLastTimer() {
    lastMiliseconds = 0;
    lastSeconds = 00;
    lastMinutes = 00;
}

function addListUI() {
    var milisecondsText, secondsText, minutesText,lastMilisecondsText, lastSecondsText, lastMinutesText;

    if (miliseconds < 9) { milisecondsText = "0" + miliseconds; }
    else { milisecondsText = miliseconds }

    if (seconds < 9) { secondsText = "0" + seconds; }
    else { secondsText = seconds }

    if (minutes < 9) {minutesText = "0" + minutes;}
    else { minutesText = minutes}

    if (lastMiliseconds < 9) { lastMilisecondsText = "0" + lastMiliseconds; }
    else { lastMilisecondsText = lastMiliseconds }

    if (lastSeconds < 9) { lastSecondsText = "0" + lastSeconds; }
    else { lastSecondsText = lastSeconds }

    if (lastMinutes < 9) {lastMinutesText = "0" + lastMinutes;}
    else { lastMinutesText = lastMinutes}

    let html =
        `<li class="list-item">
        <div class="flag-box">
            <i style="color: yellowgreen;" class="fas fa-flag fa-2x"></i>
            <span class="flag-text">${count}</span>
        </div>
        <div class="now-time-box">
            <span class="now-time-text">+ ${lastMinutesText}:${lastSecondsText}.${lastMilisecondsText}</span>
        </div>
        <div class="total-time-box">
            <span class="total-time-text">${minutesText}:${secondsText}.${milisecondsText}</span>
        </div>
    </li>`;

    listItemMain.innerHTML += html;
}

function clearAllTimer() {
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    count = 0;
    clearLastTimer();
    milisecondsText.textContent = "0" + miliseconds;
    secondsText.textContent = "0" + seconds;
    minutesText.textContent = "0" + minutes;
    listItemMain.innerHTML = "";
}








