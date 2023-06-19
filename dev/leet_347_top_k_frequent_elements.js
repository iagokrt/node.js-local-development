/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // most frequent elements

    // me!
    // k in nums

    /**Input: nums = [1,1,1,2,2,3], k = 2 
        Output: Output: [1,2]
    */
    // console.log(typeof nums, nums); // expect => {number[]} nums
    // console.log(typeof k, k); // expect => {number} k

    // chatgpt 1-
    // Create a frequency map
    // const frequencyMap = new Map();
    // for (const num of nums) {
    // frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    // }

    // // Convert frequency map to array of [element, frequency] pairs
    // const frequencyArray = Array.from(frequencyMap);

    // // Sort the array in descending order based on frequency
    // frequencyArray.sort((a, b) => b[1] - a[1]);

    // // Extract the first k most frequent elements
    // const result = frequencyArray.slice(0, k).map(pair => pair[0]);

    // return result; failed

    // chatgpt 2-
    // Create a frequency map
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Convert frequency map to array of [element, frequency] pairs
    const frequencyArray = Array.from(frequencyMap);

    // Sort the array in descending order based on frequency
    frequencyArray.sort((a, b) => {
        if (a[1] !== b[1]) {
        return b[1] - a[1]; // Sort by frequency if different
        } else {
        return a[0] - b[0]; // Sort by element value if frequency is equal
        }
    });

    // Extract the first k most frequent elements
    const result = frequencyArray.slice(0, k).map(pair => pair[0]);

    return result;
};

export default topKFrequent;

