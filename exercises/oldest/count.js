// console.log('node.js')
let objectos0 = { x: 1, y: 1}
let objectos1 = { x: 2, y: 3}
let objectos2 = { x: 3, y: 3}
let objectos3 = { x: 3, y: 4}
let objectos4 = { x: 4, y: 5}

const Count = (objects) => {
    var count = 0;
    for (let i = 0; i < objects.length; i++) {
        let currentObj = objects[i]; // objects[0] = { x: 1, y: 1}
        
        if (currentObj.x == currentObj.y) {
            count++
        }
        
    }
    return count;
}
export default Count