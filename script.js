window.onload = function (){
    countUpFromTime("September 1, 2023 12:00:00", 'countup1');
};
function countUpFromTime(countFrom, id){
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAnHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAnHour) * 1);
    mins  = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAnHour)) / (60 * 1000 ) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAnHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

var slideIndex


