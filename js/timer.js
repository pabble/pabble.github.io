var timer = document.getElementById("timer");
var date = new Date("Dec 10, 2019 17:00:00").getTime();
document.getElementById("fake").innerHTML = "pabble";


updatetimer();

var interval = setInterval(function() {
    updatetimer();
}, 1000);


function updatetimer(){

    var today = new Date().getTime();
    var distance = date - today;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = pad(hours, 2);
    minutes = pad(minutes, 2);
    seconds = pad(seconds, 2);

    timer.innerHTML = days + " _ " + hours + ":" + minutes + ":" + seconds + "";

    if (distance <= 0) {
        clearInterval(interval);
        timer.innerHTML = "COUNTDOWN FINISHED";
    }

}

function pad(nm, width, zxc) {
    zxc = zxc || '0';
    nm = nm + '';
    return nm.length >= width ? nm : new Array(width - nm.length + 1).join(zxc) + nm;
}
