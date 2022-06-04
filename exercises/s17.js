var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var lanche = input.split(' ').map((n)=> parseInt(n));

var [code, quantity] = lanche;

var lanches = [null, 4.0, 4.5, 5.0, 2.0, 1.5 ];

var total = quantity * lanches[code];

console.log(`Total: R$ ${total.toFixed(2)}`);