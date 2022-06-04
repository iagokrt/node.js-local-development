var input = require('fs').readFileSync('./dev/stdin', 'utf8')

// SOLUTION 1: 
    /* 
        var values = input.split('\n').map((n) => parseFloat(n));

        var consume;
        var distance = values.shift();
        var gas = values.shift();

        consume = distance / gas;
        // console.log(consume);

        console.log(`${consume.toFixed(3)} km/l`); 
    */

// SOLUTION 2:

    /*
        var values = input.split('\n').map((n) => parseFloat(n));

        var distance = values.shift();
        var gas = values.shift();

        function consumo(km, liters) {
            return consume = (km / liters).toFixed(3);
        }

        console.log(`${consumo(distance, gas)} km/l`);
    */
