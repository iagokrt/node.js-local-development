var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var number = parseInt(input);

const arr = Array.from({length: number}, (_, index) => index % 2 == 0 ? (index + 1) : null).filter(Number);

arr.map((n) => {
  console.log(n);
})