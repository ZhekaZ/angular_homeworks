export class Readable {
    public isReadOnly: boolean;

    public readOnly(): void {
        this.isReadOnly = true;
    }
}
