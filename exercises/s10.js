var input = require('fs').readFileSync('./dev/stdin', 'utf8')

const PI = 3.14159;

var radius = parseFloat(input);

//A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.
var volumn = (4/3) * PI * Math.pow(radius, 3);

console.log(`VOLUME = ${volumn.toFixed(3)}`);

