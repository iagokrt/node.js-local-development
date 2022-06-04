var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n').map((n)=> parseInt(n));

var a = lines.shift();
var b = lines.shift();
var x = `X = ${a + b}`
console.log(x);