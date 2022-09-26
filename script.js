const birthday = "4 august 2023";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const totalSecond = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / (3600 * 24));
    const hours = Math.floor(totalSecond % (3600 * 24) / (3600));
    const minutes = Math.floor(totalSecond % 3600 / 60);
    const seconds = Math.floor(totalSecond % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    // document.getElementById('days').innerText = formatTime(days);
    // document.getElementById('hours').innerText = formatTime(hours);
    // document.getElementById('minutes').innerText = formatTime(minutes);
    // document.getElementById('seconds').innerText = formatTime(seconds);
}

// function formatTime(time) {
//     return time < 10 ? (`0$(time)`) : time;
// }

setInterval(countdown, 1000);
countdown();

var typed = new Typed(".auto-type", {
    strings: ["Sudipto Das"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})