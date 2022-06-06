var input = require('fs').readFileSync('stdin', 'utf8');
var number = parseInt(input);
// bee 1143
for ( var i = 1; i <= number; i++) {
    console.log(`${i} ${i**2} ${i**3}`);
}