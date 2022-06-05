var input=require('fs').readFileSync('stdin','utf8')
var [t,p]=input.split('\n')
if(!p)return console.log(0)
var tea=parseInt(t)
var total=0
p.split(' ').map((n)=>{
    if(parseInt(n) === tea)total++
})
console.log(total)

