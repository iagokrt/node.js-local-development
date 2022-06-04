var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var numbers = input.split('\n').map((n) => parseInt(n));

// console.log(numbers);

var [A, B, C, D] = numbers;



var diff = (A * B - C * D);
console.log(`DIFERENCA = ${diff}`);