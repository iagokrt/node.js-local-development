let rectangle = {
    length: 4,
    width: 5,
    // perimeter(): {},
    // area(): {}
}

let perimeter = rectangle.length*2 + rectangle.width*2;
let area = rectangle.length*rectangle.width

rectangle.perimeter = perimeter
rectangle.area = area

export default rectangle