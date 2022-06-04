// let arrSize = '5'
let arrays = [2, 3, 6, 6, 5]

// leading with duplicates Map
arrays = [...new Set(arrays)]

let second = arrays.sort(function(a, b) {
    return b-a
})[1]
console.log(second)

export default arrays

/**Submitted Solution */
// function getSecondLargest(nums) {
    
//     // let arrSize = '5'
//     // let arrays = [2, 3, 6, 6, 5]

//     // leading with duplicates Map
//     nums = [...new Set(nums)]

//     let second = nums.sort(function(a, b) {
//         return b-a
//     })[1]
//     return second
// }