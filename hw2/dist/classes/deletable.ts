export class Deletable {
    public isDeleted: boolean;
    public isReadOnly: boolean = false;
    public value: string;

    public delete(): void {
        this.isDeleted = true;

        if(!this.isReadOnly) {
            this.value = 'deleted';
        }
    }
}
