var input=require('fs').readFileSync('stdin','utf8')

var n = parseInt(input);

function sFact(num)
    {
        var rval=1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return console.log(rval);
    }
sFact(n)
