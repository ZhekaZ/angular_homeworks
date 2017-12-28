import { Disposable } from '../classes/disposable';
import { Deletable } from '../classes/deletable';
import { Readable } from '../classes/readable';

class Mix implements Disposable, Deletable, Readable {
    public value: string = '';
    
    public isDisposed: boolean = false;
    public isDeleted: boolean = false;
    public isReadOnly: boolean = false;

    public dispose: () => void;
    public delete: () => void;
    public readOnly: () => void;

    get(): string {
        console.log(this.value);
        return this.value
    }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Mix, [Disposable, Deletable, Readable]);

const mix: Mix = new Mix();
console.log('123');
mix.get();
