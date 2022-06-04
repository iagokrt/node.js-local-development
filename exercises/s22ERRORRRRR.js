var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var entries = input.split(' ').map((n)=> parseInt(n));
var sortedArr = entries.slice().sort((a, b) => a - b);

// pres error
var nn = sortedArr.join("\n")
var mm = entries.join('\n');
console.log(nn);
console.log(mm);