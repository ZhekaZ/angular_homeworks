import { Converter } from './classes/convert';

// import { Binary } from './classes/binary';
// import { Octaly } from './classes/octal';
// import { Hex } from './classes/hex';


const binary = new Converter(2);

console.log('hello');
console.log(binary.convertTo(2)); // '10'
console.log(binary.convertTo(4)); // '100'
console.log(binary.convertFrom('10')); // 2
console.log(binary.convertFrom('100')); // 4

// const octaly = new Octaly();
// octaly.convertTo(10); // return '12'
// octaly.convertFrom('12'); // return 10

// const hex = new Hex();
// hex.convertTo(100); // return '64'
// hex.convertFrom('64'); // return 100
