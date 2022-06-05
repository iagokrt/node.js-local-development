var input=require('fs').readFileSync('stdin','utf8')

var [n,m] = input.split('\n').map((n) => parseInt(n));
console.log(n-m);
// Escreva um programa que, 
// dada a pressão desejada digitada
// pelo motorista 
// e a pressão do pneu lida pela bomba, 

// indica a diferença entre a pressão desejada e a pressão lida.
