var input = require('fs').readFileSync('./dev/stdin', 'utf8')

// var numbers = input.split('\n');

// var id = numbers.shift();
// var hrs = numbers.shift();
// var paid = numbers.shift();


var numbers = input.split('\n').map((n) => parseFloat(n)); // console.log(numbers);

// var salary = hrs * paid;

// console.log('NUMBER = ' + id);
// console.log('SALARY = U$' + salary.toFixed(2));


var id = numbers[0];
var hrs = numbers[1];
var paid = numbers[2];

console.log(`NUMBER = ${id}`);
console.log(`SALARY = U$ ${(hrs * paid).toFixed(2)}`); // salary
