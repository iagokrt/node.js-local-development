var input = require('fs').readFileSync('stdin', 'utf8')
try {
    var d = [
        {id: '61', v: 'Brasilia'},
        {id: '71', v: 'Salvador' },
        {id: '11', v: 'Sao Paulo' },
        {id: '21', v: 'Rio de Janeiro' },
        {id: '32', v: 'Juiz de Fora' },
        {id: '19', v: 'Campinas' },
        {id: '27', v: 'Vitoria' },
        {id: '31', v: 'Belo Horizonte' }
    ].find(c => c.id == parseInt(input)).v
    console.log(d)
} catch(e) {
    console.log('DDD nao cadastrado')
}

