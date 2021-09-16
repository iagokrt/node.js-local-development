// let nums = [1, 2, 3, 5, 7, 9];

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

let numbers = [1, 2, 3, 4, 5]

// let expect = [3, 4, 9, 8, 15]
let result = []

function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        
        console.log(currentNum)
        
        if(currentNum & 1) {
            // console.log(currentNum)
            result.push(currentNum * 3)
            // console.log(result)
        } else {
            // console.log(currentNum)
            result.push(currentNum * 2)
        }
       
    }
    console.log(result)
}

modifyArray(numbers);


// export default nums