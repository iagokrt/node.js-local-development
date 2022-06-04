var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var numbers = input.split('\n').map((n) => parseInt(n));

// console.log(numbers);

var a1 = numbers[0];
var a2 = numbers[1];

var sum = a1+a2;

console.log(`SOMA = ${sum}`)