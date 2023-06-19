/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // if (nums) {
    //     return true;
    // } else {
    //     return false;
    // }
    return nums;
};
var containsDuplicateGPT = function(nums) {
   // Create a set to store unique elements
  const set = new Set();

  // Iterate through the array
  for (const num of nums) {
    // If the element already exists in the set, it's a duplicate
    if (set.has(num)) {
      return true;
    }

    // Add the element to the set
    set.add(num);
  }

  // No duplicates found
  return false;
};

export default containsDuplicateGPT;