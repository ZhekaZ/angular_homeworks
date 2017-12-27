import { Converter } from './convert';

export class Binary extends Converter {
    constructor() {
        super(2);
    }

    // public convertTo(num: number): string {
    //     return num.toString(2);
    // }

    // public convertFrom(str: string): number {
    //     return parseInt(str, 2);
    // }
}
