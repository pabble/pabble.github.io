//rainbower
var rsize = 256;
var rainbow = new Array(rsize);

for (var i = 0; i < rsize; i++) {
  var rainbower_red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var rainbower_blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var rainbower_green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = "#"+ rainbower_red + rainbower_green + rainbower_blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / rsize * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}



var canvas, ctx, particles = [];
var breakdist, repeldist, particleamount = 75;

function init(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight * .995;

    repeldist = Math.max(canvas.width, canvas.height) / 8;
    breakdist = Math.max(canvas.width, canvas.height) / 10;

    while (particles.length < particleamount) {
        particles.push([
            [Math.random()*canvas.width, Math.random()*canvas.height],
            [Math.random()*10-5, Math.random()*10-5]
        ]);
    }

    var interval = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawparticles();
    }, 60);

}

function drawparticles(){
    for (var i = 0; i < particles.length; i++) {
        var iposx = particles[i][0][0];
        var iposy = particles[i][0][1];
        for (var j = i + 1; j < particles.length; j++) {
            var jposx = particles[j][0][0];
            var jposy = particles[j][0][1];
            var dist = Math.sqrt(Math.pow((iposx - jposx), 2) + Math.pow((iposy - jposy), 2));

            ctx.strokeStyle = rainbow[Math.abs(jposx / canvas.width * 256)];

            if (dist <= breakdist) {
                ctx.beginPath();
                ctx.moveTo(iposx, iposy);
                ctx.lineTo(jposx, jposy);
                ctx.stroke();
                ctx.closePath();
            }else if (dist <= (breakdist + (breakdist/5))){
                ctx.beginPath();
                ctx.globalAlpha = Math.abs((breakdist - dist)/100);
                ctx.moveTo(iposx, iposy);
                ctx.lineTo(jposx, jposy);
                ctx.stroke();
                ctx.globalAlpha = 1;
                ctx.closePath();
            }
        }
        particles[i][0][0] += particles[i][1][0];
        particles[i][0][1] += particles[i][1][1];

        if ((particles[i][0][0] >= canvas.width) || (particles[i][0][0] <= 0)){
            particles[i][1][0] = (particles[i][1][0] * -1);
        }
        if ((particles[i][0][1] >= canvas.height) || (particles[i][0][1] <= 0)){
            particles[i][1][1] = (particles[i][1][1] * -1);
        }
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(particles[i][0][0], particles[i][0][1], 3, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}