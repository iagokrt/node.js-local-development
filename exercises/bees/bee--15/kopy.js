var input = require('fs').readFileSync('stdin', 'utf8');
var number = parseInt(input);
// bee 1157
// console.log(number);
// 6
for(let i = 1; i <= number; i++) {

    // check if number is a factor
    if(number % i == 0) {
        console.log(i);
    }
}
