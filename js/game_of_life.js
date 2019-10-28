var xsize = window.innerWidth;
var ysize = window.innerHeight;
var res = Math.floor(Math.max(window.innerWidth, window.innerHeight)/200);


var canvas = document.getElementById("canvas");
canvas.width = xsize, canvas.height = ysize;
var ctx = canvas.getContext("2d");

var cols = Math.floor(xsize/res), rows = Math.floor(ysize/res);

var grid = new2darray(cols, rows, true, 0.4);



var interval = setInterval(function(){

    var next = new2darray(cols, rows, false, 0);
    
    for (var x = 0; x < cols; x++){
        for (var y = 0; y < rows; y++){
            var state = grid[x][y];
            var neighbors = countN(grid, x, y);
            
            if (state == 0 && neighbors == 3) {
                next[x][y] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[x][y] = 0;
            } else {
                next[x][y] = state;
            }
        }
    }

    grid = next;


    //draw onscreen
    ctx.fillStyle = "#151515";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var x = 0; x < cols; x++){
        for (var y = 0; y < rows; y++){
            if (grid[x][y] == 1){
                ctx.fillStyle = "hsl(" + x*359/cols*2+ ", 100%, 50%)";
                ctx.fillRect(x*res, y*res, res, res);
            }
        }
    }
    
}, 66.66);



function new2darray(cols, rows, bool, chance){
    var arr = new Array(cols);
    for (var i = 0; i < cols; i++){ arr[i] = new Array(rows); }
    if (bool){
        for (var x = 0; x < cols; x++){
            for (var y = 0; y < rows; y++){
                if (Math.random() > chance){
                    arr[x][y] = 1;
                }else{
                    arr[x][y] = 0;
                }
            }
        } 
    }
    return arr;
}

function countN(grid, x, y){
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}
