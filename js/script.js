function pad(nm, width, zxc) {
    zxc = zxc || '0';
    nm = nm + '';
    return nm.length >= width ? nm : new Array(width - nm.length + 1).join(zxc) + nm;
}


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


window.onmousemove = function (){
    var xpos = window.event.clientX - (window.innerWidth/2);
    var ypos = window.event.clientY - (window.innerHeight/2);
    displace(xpos/1000, ypos/100, -xpos/1000, ypos/1000, -xpos/800, -ypos/150);
}