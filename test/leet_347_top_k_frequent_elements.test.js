import { expect } from 'chai'

import topKFrequent from '../dev/leet_347_top_k_frequent_elements'

/**
 *  stringGiven an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

describe('347 - Top K Frequent Elements ', (params) => {
    /* params is generic based on the program definition 
    / if is chosing to use a function approach to the solution, use this options */
    
    // nums array
    var array_test  = [1, 2, 3, 1]
    var int_test  = 2


    // Expected output(s)/return:
    // 

    const module = topKFrequent;
    const test = topKFrequent(array_test, int_test);
    
    // problem setup test
    describe('Test the input based on the arguments', () => {
        // it('Should be a function, have two arguments words array and k non-negative integer', () => {
        //     expect(topKFrequent).to.be.a('function');
        //     expect(topKFrequent.length).to.equal(2);

        //     const words = ['i', 'test']; // same as array_test
        //     expect(Array.isArray(words)).to.be.true;

        //     // Test with a non-array first argument
        //     const numsNonArray = 'not an array';
        //     expect(Array.isArray(numsNonArray)).to.be.false;

        //     // Test if the second argument is a non-negative integer
        //     const k = 2; // same as int_test
        //     expect(Number.isInteger(k) && k >= 0).to.be.true;

        // });
      });

    // program test
    describe('Run tests on main program', () => {
        // it('Should return the k most frequent elements in nums array', () => {
        //     const nums1 = [1, 1, 1, 2, 2, 3];
        //     const k1 = 2;
        //     expect(topKFrequent(nums1, k1)).to.deep.equal([1, 2]);
      
        //     const nums2 = [1];
        //     const k2 = 1;
        //     expect(topKFrequent(nums2, k2)).to.deep.equal([1]);
      
        //     const nums3 = [1, 1, 1, 2, 2, 3, 3, 3];
        //     const k3 = 3;
        //     expect(topKFrequent(nums3, k3)).to.deep.equal([1, 2, 3]);
      
        //     // Add more test cases as needed
        // });

    });

   
})