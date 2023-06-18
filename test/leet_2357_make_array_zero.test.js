import { expect } from 'chai'

import minimumOperations from '../dev/leet_2357_make_array_zero'


/**
 * You are given a non-negative integer array nums. In one operation, you must:

    - Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
    Subtract x from every positive element in nums.
    Return the minimum number of operations to make every element in nums equal to 0.
 */
describe('2357. minimum Operations To Zero', (params) => {
    // nums array
    var array_test  = [1, 2, 3, 1]

    const module = minimumOperations;
    const test = minimumOperations(array_test);
    
    // problem setup test
    describe('problem setup tests', () => {
        it('Should be a function, have only one argument (an array)', () => {
            expect(module).to.be.a('function');
            expect(module.length).to.equal(1);
            const sampleArgument = [1, 2, 3];
            expect(Array.isArray(sampleArgument)).to.be.true;
            // non-negative integer
        });
    });

    // program test
    describe('Minimum Operations to Zero', () => {
        it('should return the minimum number of operations to make every element zero', () => {
          const nums = [3, 2, 1, 4, 3];
          const result = minOperationsToZero(nums);
          expect(result).to.equal(7);
        });
      
        it('should return 0 if all elements are already zero', () => {
          const nums = [0, 0, 0];
          const result = minOperationsToZero(nums);
          expect(result).to.equal(0);
        });
      
        it('should handle empty arrays and return 0', () => {
          const nums = [];
          const result = minOperationsToZero(nums);
          expect(result).to.equal(0);
        });
      
        it('should handle arrays with a single non-zero element and return 0', () => {
          const nums = [5];
          const result = minOperationsToZero(nums);
          expect(result).to.equal(0);
        });
      
        it('should handle arrays with a single zero element and return 0', () => {
          const nums = [0];
          const result = minOperationsToZero(nums);
          expect(result).to.equal(0);
        });
      });

   
})