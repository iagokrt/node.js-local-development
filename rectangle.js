// function Rectangle(a, b) {
//     return rectangle = {
//         length: 4,
//         width: 5,
//         perimeter: 0,
//         area: 0
//     }
// }
let rectangle = {
    length: 4,
    width: 5,
    // perimeter: 0,
    // area: 0
}

var perimeter = rectangle.length*2 + rectangle.width*2;
var area = rectangle.length*rectangle.width

rectangle.perimeter = perimeter
rectangle.area = area

export default rectangle