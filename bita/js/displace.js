/*
function displace(r1, r2, g1, g2, b1, b2){
    var rid = document.getElementById("r");
    var gid = document.getElementById("g");
    var bid = document.getElementById("b");

    var xoff = (-50);
    var yoff = (-55);

    rid.style.transform = "translateX(" + (xoff + r1) + "%) translateY(" + (yoff + r2) + "%)";
    gid.style.transform = "translateX(" + (xoff + g1) + "%) translateY(" + (yoff + g2) + "%)";
    bid.style.transform = "translateX(" + (xoff + b1) + "%) translateY(" + (yoff + b2) + "%)";
}

displace(1, -1, 0, 0, -1, 1);

window.onmousemove = function (){
    var xmid = window.event.clientX - (window.innerWidth/2);
    var ymid = window.event.clientY - (window.innerHeight/2);
    displace(xmid/(window.innerWidth/2)*-1.5, ymid/(window.innerHeight/2)*-3, 0, 0, xmid/(window.innerWidth/2)*1.5, ymid/(window.innerHeight/2))*3;
}
*/