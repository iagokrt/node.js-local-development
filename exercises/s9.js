var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var pieces = input.split('\n');

var [p1id, p1quantity, p1price] = pieces.shift().split(' ');
var [p2id, p2quantity, p2price] = pieces.shift().split(' ');

var total = (p1quantity * p1price) + (p2quantity * p2price);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);














// ----- wrong answer
// var numbers = input.split('\n')
// var total = 0;


// for (var i = 0; i < numbers.length; i++) {
//     var piece = numbers[i];
//     var info = piece.split(' ');
  
//     var quantity = info[1]
//     var value = info[2]

//     var subtotal = quantity * value;

//     total += subtotal;
// }
// console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
