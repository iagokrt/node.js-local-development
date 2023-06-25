// Exemple v2 - concise version
const rectangle = {
    length: 4,
    width: 5,
    get perimeter() {
        return 2 * (this.length + this.width);
    },
    get area() {
        return this.length * this.width;
    },
};

export default rectangle;