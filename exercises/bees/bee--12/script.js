var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map((n)=> parseInt(n));
var table = {
    '0':'300',
    '1':'1500',
    '2':'600',
    '3':'1000',
    '4':'150'
}
var total=0;
for ( var i = 0; i < lines.length;i++) {
    var meal = lines[i];
    var current = meal * parseInt(table[i]);
    total += current
    // console.log(meal, '*',i);
}
console.log(total+225);

/**
 * Curupira 300
 * Boitatá 1500
 * Boto 600
 * Mapinguari 1000
 * Iara 150
*/
// var resultArr = [];

// var c = lines.shift() * 300;
// var boi = lines.shift() * 1500;
// var boto = lines.shift() * 600;
// var m = lines.shift() * 1000;
// var iara = lines.shift() * 150;
// resultArr.push(c, boi, boto, m, iara, chica)
// // console.log(resultArr);
// var mandioca = resultArr.reduce((total, meal)=> total+meal,0);
// console.log(mandioca)



