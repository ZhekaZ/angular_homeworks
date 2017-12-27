import { IConverter } from '../interfaces/IConverter';

export class Converter implements IConverter {
    protected radix: number;

    constructor(radix) {
        this.radix = radix;
    }

    public convertTo(num: number): string {
        return num.toString(this.radix);
    }

    public convertFrom(str: string): number {
        return parseInt(str, this.radix);
    }
}
