export class Disposable {
    public isDisposed: boolean;
    public isReadOnly: boolean = false;
    public value: string = '';

    public dispose():void {
        if (!this.isReadOnly) {
            this.isDisposed = true;
        }
    }
}
