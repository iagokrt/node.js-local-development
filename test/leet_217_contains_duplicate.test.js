import { expect } from 'chai'

import containsDuplicate from '../dev/leet_217_contains_duplicate'

/**
 *  stringGiven an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

describe('(217) contains duplicate', (params) => {
    /* params is generic based on the program definition 
    / if is chosing to use a function approach to the solution, use this options */
    
    // nums array
    var array_test  = [1, 2, 3, 1]

    // Expected output(s)/return:
    // true || false

    const module = containsDuplicate;

    const test = containsDuplicate(array_test);
    
    // problem setup test
    describe('Test the input based on the arguments', () => {
        it('Should be a function, have only one argument (an array)', () => {
            expect(module).to.be.a('function');
            expect(module.length).to.equal(1);
            const sampleArgument = [1, 2, 3];
            expect(Array.isArray(sampleArgument)).to.be.true;
        });
      });

    // program test
    describe('Run test on main program', () => {
        it('Should return true if any value appears at least twice in the array', () => {
            expect(test).to.be.true
        })
    
        it('Should return false if every element is distinct in the array', () => {
            expect(test).to.be.false
        })
    
    });

   
})