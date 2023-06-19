/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // most frequent elements
    
    // 1 Create a frequency map
    const frequencyMap = new Map();
    for (const word of words) {
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    // 2 Convert frequency map to array of [word, frequency] pairs
    const frequencyArray = Array.from(frequencyMap);
    //   console.log(frequencyArray);

    // 3 Sort the array based on frequency and lexicographical order
    frequencyArray.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // Sort by frequency if different
        } else {
            return a[0].localeCompare(b[0]); // Sort lexicographically if frequency is equal
        }
    });
    // console.log(`new: ${typeof frequencyArray}`, frequencyArray);


    // 4 Extract the first k most frequent words
    const result = frequencyArray.slice(0, k).map(pair => pair[0]);

  return result;
};

export default topKFrequent;

