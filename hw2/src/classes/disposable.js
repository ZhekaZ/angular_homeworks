"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Disposable = (function () {
    function Disposable() {
        this.isReadOnly = false;
        this.value = '';
    }
    Disposable.prototype.dispose = function () {
        if (!this.isReadOnly) {
            this.isDisposed = true;
        }
    };
    return Disposable;
}());
exports.Disposable = Disposable;
//# sourceMappingURL=disposable.js.map