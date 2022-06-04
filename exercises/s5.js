var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var numbers = input.split('\n').map((n) => parseFloat(n));

// console.log(numbers);

// A = PESO 2.
// B = PESO 3.
// C = PESO 5.



var [A, B, C] = numbers;


// var media = 11* ;

var media = (A * 2 + B * 3 + C * 5 ) / 10.0;
console.log(`MEDIA = ${media.toFixed(1)}`)