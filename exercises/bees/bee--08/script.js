var input = require('fs').readFileSync('stdin', 'utf8')

// beecrowd | 2006
// var [lines] = input.split(' ').map((n)=> parseInt(n));
var [t, participants] = input.split('\n');

// if (tea) console.log(tea);
if (!participants) {
    return console.log(0);
}
var tea = parseInt(t)
// (1) o chá branco; (2) chá verde; 
// (3) chá preto; ou (4) chá de ervas.
var total = 0

participants.split(' ').map((n)=> {
    var participant = parseInt(n);
    if ( participant === tea ) {
        // console.log(n);
        total++
    }
})
// console.log('total', total);
console.log(total);
// console.log('tea', tea);

/**
 * 
 * 
var input=require('fs').readFileSync('stdin','utf8')
var [t,p]=input.split('\n')
if(!p)return console.log(0)
var tea=parseInt(t)
var total=0
p.split(' ').map((n)=>{
(parseInt(n) === tea)?total++:''
})
console.log(total)


 */
