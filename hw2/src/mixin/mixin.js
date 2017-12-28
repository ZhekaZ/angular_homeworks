"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var disposable_1 = require("../classes/disposable");
var deletable_1 = require("../classes/deletable");
var readable_1 = require("../classes/readable");
var Mix = (function () {
    function Mix() {
        this.value = '';
        this.isDisposed = false;
        this.isDeleted = false;
        this.isReadOnly = false;
    }
    Mix.prototype.get = function () {
        console.log(this.value);
        return this.value;
    };
    return Mix;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Mix, [disposable_1.Disposable, deletable_1.Deletable, readable_1.Readable]);
var mix = new Mix();
console.log('123');
mix.get();
//# sourceMappingURL=mixin.js.map