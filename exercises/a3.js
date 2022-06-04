var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var number = input;
var patt = /[1][3]/;

if (number.match(patt)) {
  console.log(`${number} es de Mala Suerte`);
} else {
  console.log(`${number} NO es de Mala Suerte`);
}
