import { expect } from 'chai'

import response from '../dev/script.js'

describe('beecrowd | 1044', () => {
    let input = '20 21'; // must return if multiple or not
    
    var [a, b] = input.split(' ').map((n)=> parseInt(n));
    
    let test = response;
    
    var remainder = 0;
    
    remainder = a % b;
    
    (a % b == 0) ? test = 'Sao Multiplos' : 'Nao sao Multiplos'

    let multiple = 'Sao Multiplos'
    let not_multiple = 'Nao sao Multiplos'

    it ('should return multiple if remainder equals to 0', () => {
        if (remainder == 0) {
            expect(test).to.equal(multiple)
        }
    })

    it ('should return not multiple if remainder diffs to 0', () => {
        if (remainder !== 0) {
            expect(test).to.equal(not_multiple)
        }
    })

    it('output must be string', () => {
        expect(test).to.be.an('string')
    })
})