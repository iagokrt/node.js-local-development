var input = require('fs').readFileSync('./dev/stdin', 'utf8')

// var numbers = input.split('\n');

// var id = numbers.shift();
// var hrs = numbers.shift();
// var paid = numbers.shift();


var numbers = input.split('\n').map((n) => parseFloat(n)); // console.log(numbers);

// var salary = hrs * paid;

// console.log('NUMBER = ' + id);
// console.log('SALARY = U$' + salary.toFixed(2));


var name = numbers[0];
var salary = numbers[1];
var sold = numbers[2];

var comision = 0;

comision = 0.15 * sold

var rs = 0;

rs = comision + salary;

console.log(`TOTAL = R$ ${rs.toFixed(2)}`);
// console.log(`SALARY = U$ ${(hrs * paid).toFixed(2)}`); // salary
