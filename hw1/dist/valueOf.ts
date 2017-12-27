function getValueOf<T>(val: T): boolean {
    return !!val.valueOf();
}

console.log(getValueOf(true));
console.log(getValueOf(123));
console.log(getValueOf('123'));
