var input = require('fs').readFileSync('./dev/stdin', 'utf8')


var PI = 3.14159;

var radius = parseFloat(input);

var area = PI * Math.pow(radius, 2);

// var ar = (radius*radius) * Math.PI;


var rs = area.toFixed(4);
console.log("A=" + rs);