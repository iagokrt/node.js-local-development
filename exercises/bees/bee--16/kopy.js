var input = require('fs').readFileSync('stdin', 'utf8');
var number = parseInt(input);
// beecrowd | 1144
for ( var i = 1; i <= number; i++) {
    console.log(`${i} ${i**2} ${i**3}`);
    console.log(`${i} ${i**2+1} ${i**3+1}`);
}