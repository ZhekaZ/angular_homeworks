export interface IConverter {
    convertTo(num: number): string;
    convertFrom(str: string): number;
}
