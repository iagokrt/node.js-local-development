import { expect } from 'chai'

import arrays from '../arrays.js'

describe('arrays exercise', () => {
    let arr = [2, 3, 6, 6, 5]; // must return the second largest 

    let arrExpect = 5 

    it('should input the size for an array of numbers', () => {
        expect(arrays.length).to.eql(arrExpect)
    })
    // it('should input the array of numbers', () => {
    //     expect(arrays).to.be.an('array')
    // })
  
    // it('the array of numbers length must be equals to the inputed size', () => {
    //     expect(nums).to.be.an('array')
    // })

})