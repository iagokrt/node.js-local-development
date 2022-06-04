var input = require('fs').readFileSync('stdin', 'utf8')

var [a, b] = input.split(' ').map((n)=> parseInt(n));
// 6 24

var testing = 6 / 24;
console.log(testing);

// if () {
    // console.log(true);
// }

console.log(a,b);