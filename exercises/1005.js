var lines = input.split('\n').map((n)=> parseFloat(n))

var a = lines.shift() * 3.5;
var b = lines.shift() * 7.5;

var media = (a + b) / 11; 

console.log(`MEDIA = ${media.toFixed(5)}`);