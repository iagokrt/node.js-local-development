var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var entries = input.split('\n').map((n)=> parseInt(n));

var time = entries.shift(); // h
var velocity = entries.shift(); // Km/h

var distance, consum;
distance = velocity * time; // Km
const autonomy = 12; // um automóvel que faz 12 KM/L

consum = distance / autonomy;
console.log(consum.toFixed(3));
