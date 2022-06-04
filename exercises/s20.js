var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var entries = input.split(' ').map((n)=> parseInt(n));

var A = entries.shift();
var B = entries.shift();
var C = entries.shift();
var D = entries.shift();

/**
 * Leia 4 valores inteiros A, B, C e D.
 *  A seguir, 
 * se B for maior do que C && se D for maior do que A,
 * && a soma de C com D for maior que a soma de A e B e
 * &&  se C e D, ambos, forem positivos e 
 * se a variável A for par escrever a mensagem "Valores aceitos", 
 * senão escrever "Valores nao aceitos".
 * 
 */


if (B > C && D > A && C+D > A+B && A % 2 == 0 && C > 0 && D > 0) {
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos');
}