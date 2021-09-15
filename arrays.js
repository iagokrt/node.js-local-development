// let arrays  = {
//     length: 0
// }

let arrSize = '5'
let arrays = [2, 3, 6, 6, 5]

// leading with duplicates Map
arrays = [...new Set(arrays)]

let second = arrays.sort(function(a, b) {
    return b-a
})[1]
console.log(second)

// console.log(typeof arrays)

// for(let i =0; i < arrays.length; i++ ) {
//     let array = arrays[i];
//     console.log(array)
//     console.log(typeof array)
// }

// let intArray = arrays.map(Number);
// console.log(typeof intArray)


// Re-ordenar o array em ordem crescente
// Pegar o último item do array (o numero mais alto )
// Colocar ele num mapeamento.
// Remover do Array esse número
// pegar o novo ultimo
// printar o novo ultimo.

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