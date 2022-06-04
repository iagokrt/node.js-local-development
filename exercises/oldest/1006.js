var lines = input.split('\n').map((n)=> parseFloat(n))

var A = lines.shift() * 2;
var B = lines.shift() * 3;
var C = lines.shift() * 5;

var media = (A + B + C) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);

/**
 *  sabendo que a nota A tem peso 2, 
 * a nota B tem peso 3 e 
 * a nota C tem peso 5. 
 * Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
 */