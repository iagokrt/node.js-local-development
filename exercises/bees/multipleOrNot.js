var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var [a, b] = input.split(' ').map((n)=> parseInt(n))
console.log(((a % b === 0  || b % a === 0) ? 'Sao Multiplos':'Nao sao Multiplos'))
// export default response
// console.log(response);