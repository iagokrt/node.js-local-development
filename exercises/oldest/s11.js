var input = require('fs').readFileSync('./dev/stdin', 'utf8')

const pi = 3.14159;

var values = input.split(' ').map((n) => parseFloat(n));

// console.log(values)

var A = values.shift()
var B = values.shift()
var C = values.shift()

// console.log('a:', A);
// console.log('b:', B);
// console.log('c:', C);

var triangulo, circulo, trapezio, quadrado, retangulo;

triangulo = (A * C) / 2;
circulo = pi * Math.pow(C, 2);
trapezio = ((A + B) * C) / 2; 
quadrado = B * B;
retangulo = A * B;

// var results = [];
// results.push((A * C) / 2);
// console.log(results);

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

/**
 * a) a área do triângulo retângulo que tem A por base e C por altura.
   b) a área do círculo de raio C. (pi = 3.14159)
   c) a área do trapézio que tem A e B por bases e C por altura.
   d) a área do quadrado que tem lado B.
   e) a área do retângulo que tem lados A e B.

    TRIANGULO: 7.800
    CIRCULO: 84.949
    TRAPEZIO: 18.200
    QUADRADO: 16.000
    RETANGULO: 12.000
*/






