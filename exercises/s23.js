var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var segundos = parseInt(input);

var hora, minuto;

hora = parseInt(segundos / 3600);
segundos = segundos % 3600;

minuto = parseInt(segundos / 60);
segundos = segundos % 60;


console.log(`${hora}:${minuto}:${segundos}`);