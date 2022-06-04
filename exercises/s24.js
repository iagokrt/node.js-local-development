var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var entries = input.split(' ').map((n)=> parseFloat(n));

var [A, B, C] = entries; 

// Triangulo
/**
 * um de seus lados deve ser
 * maior que o valor absoluto (módulo) 
 * da diferença dos outros dois lados 
 * e menor que a soma dos outros
 * dois lados.
*/

if (Math.abs(B - C) < A && A < B + C) {
    // var perim = A+B+C
    console.log(`Perimetro = ${(A+B+C).toFixed(1)}`);
} else {
    // var area = (A+B).h/2
    console.log(`Area = ${((A+B)*C / 2).toFixed(1)}`);
}

// console.log(`A ${A}`);
// console.log(`B ${B}`);
// console.log(`C ${C}`);
