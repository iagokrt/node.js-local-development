var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var value = parseFloat(input);

var intervalos = [
    {
        min: 0,
        max: 25
    },
    {
        min: 25,
        max: 50
    },
    {
        min: 50,
        max: 75
    },
    {
        min: 75,
        max: 100
    },
]

if (intervalos[0].min <= value && value <= intervalos[0].max ) {
    console.log('Intervalo [0,25]');
} else if (intervalos[1].min <= value && value <= intervalos[1].max) {
    console.log('Intervalo (25,50]');
} else if (intervalos[2].min <= value && value <= intervalos[2].max) {
    console.log('Intervalo (50,75]');
} else if (intervalos[3].min <= value && value <= intervalos[3].max) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
}