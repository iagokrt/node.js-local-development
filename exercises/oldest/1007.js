var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var lines = input.split('\n').map((n)=> parseInt(n))

// console.log(lines);

var A = lines.shift();
var B = lines.shift();
var C = lines.shift();
var D = lines.shift();

var diff = (A * B - C * D);

console.log(`DIFERENCA = ${diff}`);