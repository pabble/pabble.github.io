var canvas, ctx, particles;

function draw(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*.995;


    particles = [];
    for (var i = 0; i < 200; i++) {
        particles.push(new Particle(10));
    }
    

    var interval = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            if(i!=0){particles[i].show(particles[i-1].xpos, particles[i-1].xpos);}
        }
    }, 60);
}


class Particle{
    constructor(sz){
        this.xpos = Math.random() * canvas.width;
        this.ypos = Math.random() * canvas.height;
        this.dirx = ((Math.random() * 2) - 1) * 5;
        this.diry = ((Math.random() * 2) - 1) * 5;
        this.sz = sz;
    }

    update(){
        this.xpos += this.dirx;
        this.ypos += this.diry;

        if (this.xpos > canvas.width + this.sz/2){this.xpos = 0};
        if (this.xpos < 0 - this.sz/2){this.xpos = canvas.width};

        if (this.ypos > canvas.height + this.sz/2){this.ypos = 0};
        if (this.ypos < 0 - this.sz/2){this.ypos = canvas.height};

    }

    show(antx, anty){
        ctx.beginPath();
        ctx.fillStyle = "#ff00ff";
        ctx.arc(this.xpos, this.ypos, this.sz, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.xpos, this.ypos);
        ctx.lineTo(antx, anty);
        ctx.strokeStyle = "#00ff00";
        ctx.stroke();
        ctx.closePath();
    }
}
