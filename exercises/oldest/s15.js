var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var distance = parseInt(input);

// console.log(distance);

// carro x = 60km/h

// carro y = 90km/h
// consegue se afastar um quilômetro a cada 2 minutos.

// 1 KM - 2 MIN
// V KM - X MIN
// 30(distance) KM - X MIN




var timeToReach = distance * 2;
console.log(`${timeToReach} minutos`)

// Leia a distância (em Km) e 
// calcule quanto tempo leva (em minutos) 
// para o carro Y tomar essa distância do outro carro.

