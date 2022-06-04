var input = require('fs').readFileSync('./dev/stdin', 'utf8')

// var word = input;
// Por exemplo, o número 341329 é de má sorte, enquanto o número 26771 não é.
// function test(word) {
//   // let query;
//   return (word.length > 10) ? 'palavrao' : 'palavrinha'
// }
console.log((input.length > 10) ? 'palavrao' : 'palavrinha');
