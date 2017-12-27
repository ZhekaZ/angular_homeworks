class Octaly {
    convertTo(num) {
        return num.toString(8);
    }
    convertFrom(str) {
        return parseInt(str, 8);
    }
}
const octaly = new Octaly();
octaly.convertTo(10);
octaly.convertFrom('12');
//# sourceMappingURL=octal.js.map