var input = require('fs').readFileSync('stdin', 'utf8')

// var lines = input.split('\n').map(((n) => Number(n)));
console.log(`${input.split('\n').map(((n) => Number(n))).reduce(function(size, n){ n > 0 ? size++ : ''
    return size;
}, 0)} valores positivos`);

// var pos = lines.reduce((acc, num) => {
//     if (num > 0) {
//         acc++;
//     }
//     return acc;
// }, 0);
// console.log(`${pos} valores positivos`);
