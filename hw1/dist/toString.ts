function getString<T>(str: T): string {
    return str.toString();
}

console.log(getString(123));
console.log(getString([]));
console.log(getString('0'));
