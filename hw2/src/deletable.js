(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
});
//# sourceMappingURL=deletable.js.map