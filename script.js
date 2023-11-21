const clock = document.querySelector('.clock');
const play = document.querySelector('.play')
const replay = document.querySelector('.replay')
const stops = document.querySelector('.stop')


let timer = null;
let [secs, mins, hrs] = [0, 0, 0];


function startStopwatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    //update time
    timer = setInterval(updateTimer, 1000)
}

function updateTimer() {
    secs++;
    if (secs === 60) {
        secs = 0;
        mins++;

        if (mins === 60) {
            mins = 0;
            hrs++;
        }
    }
    //display time
    clock.innerHTML = formatTime(hrs) + ":" + formatTime(mins) + ":" + formatTime(secs);
}


function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function resetStopwatch() {
    clearInterval(timer);
    [secs, mins, hrs] = [0, 0, 0];
    clock.innerHTML = "00:00:00"
}

play.addEventListener('click', function () {
    startStopwatch();
})

replay.addEventListener('click', function () {
    resetStopwatch();
})

stops.addEventListener('click', function () {
    clearInterval(timer);
})


