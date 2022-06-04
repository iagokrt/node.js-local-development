var input = require('fs').readFileSync('./dev/stdin', 'utf8')

const pi = 3.14159;

var values = input.split(' ').map((n) => parseInt(n));

var result = values.reduce((last, next) => (last > next) ? last : next);

console.log(`${result} eh o maior`);
// var result = Math.max(...values); // This also works nicely

// console.log(values);

// formula : MAIOR_AB = (a+b+abs(a-b)) / 2

// var X = values.shift();
// var Y = values.shift();
// var Z = values.shift();




// var first = ( X + Y + Math.abs(X-Y)) / 2;

// if (Z > first) {
//   result = Z;
// } else {
//   result = first;
// }

// var result = 1;







