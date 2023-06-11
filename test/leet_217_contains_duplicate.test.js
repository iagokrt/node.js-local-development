import { expect } from 'chai'

import containsDuplicate from '../dev/leet_217_contains_duplicate'

/**
 *  stringGiven an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

describe('(217) contains duplicate', () => {

    var testCase  = [1,2,3,1] // nums

    // const expected = true
    // const expected2 = false
    const module = containsDuplicate;

    const test = containsDuplicate(testCase);
    // console.log(module);
    it('should be a function with one argument of type array', () => {
        expect(module).to.be.a('function'); // check if is a function
        expect(module.length).to.equal(1); // check if receives only one argument
        // expect(module.arguments[0]).to.be.an('array'); // check if is an array type but it will return a TypeError
        
        const sampleArgument = [1,2,3];
        expect(Array.isArray(sampleArgument)).to.be.true; // check if param is an array
    })

    it('Should return true if any value appears at least twice in the array', () => {
        expect(test).to.be.true
    })

    it('Should return false if every element is distinct in the array', () => {
        expect(test).to.be.false
    })

})