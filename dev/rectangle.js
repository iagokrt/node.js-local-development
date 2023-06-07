let rectangle = {
    length: 4,
    width: 5,
    // perimeter: 0,
    // area: 0
}

let perimeter = rectangle.length*2 + rectangle.width*2;
let area = rectangle.length*rectangle.width

rectangle.perimeter = perimeter
rectangle.area = area

export default rectangle