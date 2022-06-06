var input = require('fs').readFileSync('stdin', 'utf8');
var number = parseInt(input);
// beecrowd | 3046 Dominó
console.log(((number+1)*(number+2))/2);