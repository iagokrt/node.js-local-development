var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var entries = input.split('\n');

var num = parseInt(entries.shift());

var arr = [];
for ( var i = 0; i < num; i++ ) {
    var answer = parseInt(entries[i]); 
    arr.push(answer);
}

arr.map((ans, i) => {
    console.log(`resposta ${i +1}: ${ans}`)
});