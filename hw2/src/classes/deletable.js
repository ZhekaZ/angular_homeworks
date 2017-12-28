"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deletable = (function () {
    function Deletable() {
        this.isReadOnly = false;
    }
    Deletable.prototype.delete = function () {
        this.isDeleted = true;
        if (!this.isReadOnly) {
            this.value = 'deleted';
        }
    };
    return Deletable;
}());
exports.Deletable = Deletable;
//# sourceMappingURL=deletable.js.map