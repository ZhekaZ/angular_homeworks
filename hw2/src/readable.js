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
    var Readable = (function () {
        function Readable() {
        }
        Readable.prototype.readOnly = function () {
            this.isReadOnly = true;
        };
        return Readable;
    }());
    exports.Readable = Readable;
});
//# sourceMappingURL=readable.js.map