var input = require('fs').readFileSync('stdin', 'utf8')

var [P1, C1, P2, C2] = input.split(' ').map((n)=> parseInt(n));

// gangorra estara em equilibro se:
// P1 ∗ C1 = P2 ∗ C2

var SIDE1 = P1*C1;
var SIDE2 = P2*C2;
if ((SIDE1) === (SIDE2))  {
    console.log(0);
} else {
    (SIDE1 > SIDE2) ? console.log(-1):console.log(1);  
}

