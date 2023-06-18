/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    let min = Infinity;
    for (const num of nums) {
      if (num > 0 && num < min) {
        min = num;
      }
    }
  
    let operations = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        const subtract = Math.floor(nums[i] / min);
        operations += subtract;
        nums[i] -= subtract * min;
      }
    }
  
    return operations;
  }

export default minimumOperations;
