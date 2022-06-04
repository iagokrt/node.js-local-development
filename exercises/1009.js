var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var lines = input.split('\n');

// const result = Object.fromEntries(lines.map(k => ([k, k])))

var person = {
    name: '',
    salary: 0,
    sales: 0,
    get commission() {return (this.sales * 0.15) },
    get total() { return (this.salary + this.commission).toFixed(2)}
}

person.name = lines.shift()
person.salary = parseFloat(lines.shift())
person.sales = parseFloat(lines.shift())

console.log(`TOTAL = R$ ${person.total}`);
