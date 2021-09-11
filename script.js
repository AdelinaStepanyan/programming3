var matrix = [
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 2, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 2, 0, 1, 1, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 3, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0],
    [1, 1, 2, 0, 1, 0, 2, 0, 0, 0, 1, 2, 1, 5, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 2, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 2, 1],
    [0, 2, 1, 0, 0, 0, 1, 0, 4, 0, 2, 2, 0, 1, 0, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0],
    [0, 2, 0, 0, 2, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 2, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 1, 1, 0, 0, 0, 1, 2, 0, 0, 2, 0, 1, 0],
    [1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 1, 2, 0, 0, 1, 1, 1, 0, 0, 1, 2, 0, 1, 0, 2, 0, 0]
];

var side = 20;
var purpleArr=[];
var gishxArr = [];
var grassArr = [];
var grasseaterArr = [];
var gishArr = [];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gret = new GrassEater(x, y, 2);
                grasseaterArr.push(gret);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                gishArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var gish = new Gishatichx(x, y, 4);
                gishxArr.push(gish);
            }
            else if (matrix[y][x] == 5) {
                var gish = new Purple(x, y, 5);
                purpleArr.push(gish);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var j in grasseaterArr) {
        grasseaterArr[j].eat();
    }
    for (var k in gishArr) {
        gishArr[k].eat();
    }
    for (var d in gishxArr) {
        gishxArr[d].eat();
    }
    for (var b in purpleArr) {
        purpleArr[b].eat();
    }

    if (grassArr.length == 0) {
        matrix[0][0] = 1;
        var ar = new Grass(0, 0, 1);
        grassArr.push(ar);
        matrix[10][10] = 1;
        var gr = new Grass(10, 10, 1);
        grassArr.push(gr);

    }

if (grasseaterArr.length == 0) {
    var d=Math.floor(random(1,12))
       
        matrix[d][d] = 2;
        var gr = new GrassEater(5, 5, 2);
        grasseaterArr.push(gr);

    }
    if (gishArr.length == 0) {
        var d=Math.floor(random(1,12))
        
        matrix[d][d] = 3;
        var gr = new Gishatich(d, d, 2);
        gishArr.push(gr);

    }
}