var input = require('fs').readFileSync('./dev/stdin', 'utf8')
console.log(`a=${(3.14159 * Math.pow(parseFloat(input), 2)).toFixed(4)}`);
