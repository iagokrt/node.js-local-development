var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var numbers = input.split('\n').map((n) => parseFloat(n));

// console.log(numbers);

var A = numbers[0];          // peso = 3.5
var B = numbers[1];          // peso 7.5

// var media = 11* ;

var media = (A * 3.5 + B * 7.5 ) / 11.0;
console.log(`MEDIA = ${media.toFixed(5)}`)