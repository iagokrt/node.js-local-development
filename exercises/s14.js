var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var lines = input.split('\n');

var p1Coords = lines.shift().split(' ').map((num) => parseFloat(num));
var p2Coords = lines.shift().split(' ').map((num) => parseFloat(num));

var x1,y1,x2,y2;

x1 = p1Coords.shift();
y1 = p1Coords.shift();

x2 = p2Coords.shift();
y2 = p2Coords.shift();

function findDistance(x1, y1, x2, y2) {
    // formula: √ (x2 - x1)² + (y2 - y1)²
    var diffX = x2 - x1; 
    var diffY = y2 - y1;

    var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2), 2);

    return console.log(distance.toFixed(4))
}

findDistance(x1, y1, x2, y2);