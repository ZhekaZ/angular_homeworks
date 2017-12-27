import { Converter } from './convert';

export class Hex extends Converter {
    constructor() {
        super(16);
    }
    // public convertTo(num: number): string {
    //     return num.toString(16);
    // }

    // public convertFrom(str: string): number {
    //     return parseInt(str, 16);
    // }
}
