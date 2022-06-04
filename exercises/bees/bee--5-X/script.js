var input = require('fs').readFileSync('stdin', 'utf8')

var side = parseInt(input);
var b,w;

var board = side*side;

var rate = board / 2;


console.log(board);
console.log(rate);
b=0;
w=0;

// console.log();

console.log(`${w} casas brancas e ${b} casas pretas`);
