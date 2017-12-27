class Binary {
    convertTo(num) {
        return num.toString(2);
    }
    convertFrom(str) {
        return parseInt(str, 2);
    }
}
const binary = new Binary();
console.log(binary.convertTo(2));
console.log(binary.convertTo(4));
console.log(binary.convertFrom('10'));
console.log(binary.convertFrom('100'));
//# sourceMappingURL=binary.js.map