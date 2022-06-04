var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var [a, b] = input.split(' ').map((n)=> parseInt(n));
var response = '';

if (a % b == 0) {
    response = 'Sao Multiplos'
}  else {
    response = 'Nao sao Multiplos'
}

export default response
