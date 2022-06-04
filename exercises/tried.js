var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var numbers = input.split('\n')

// console.log(numbers);

var total = 0;

// var [ id, quantity, price ] = numbers[0];
// // var [ id2, quantity2, price2 ] = numbers[1];

// var product1 = numbers.shift();

// console.log(product1);

// var prod1Arr = product1.split(' ');
// console.log(prod1Arr)
// var product2 = numbers.shift();



// // var q = parseInt(quantity)
// // var qq = parseInt(quantity2)

// // var p = parseFloat(price);
// // var pp = parseFloat(price2);

// // var total = q * p + qq * pp;

// console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);

// console.log(typeof qq)



// for (var i = 0; i< numbers.length; i++) {
//     console.log(numbers[i])
// }


for (var i = 0; i < numbers.length; i++) {
    var piece = numbers[i];
    var info = piece.split(' ');
    // console.log(info);

    // var id = info.shift()
    // var quantity = info.shift()
    // var value = info.shift()
    var quantity = info[1]
    var value = info[2]


    var subtotal = quantity * value;

    total += subtotal;

    // console.log(subtotal);
    // console.log(total);
}
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);

//---------------------------------------
// console.log(numbers[0]);
// var arr ;
// numbers.map((item)=> {
//     // var id = item;

//     arr = item.split(' ')


// })
// console.log(arr)
// function parser(stringToNum) {
    
//     var quantite = parseInt(stringToNum)

//     return quantite;
// }

// var q = parser(quantity);
// var qq = parser(quantity2);