var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var lines = input.split('\n');

var number = lines.shift();

var salary = (lines.shift() * lines.shift()).toFixed(2);

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary}`);
