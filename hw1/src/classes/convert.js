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
    var Converter = (function () {
        function Converter(radix) {
            this.radix = radix;
        }
        Converter.prototype.convertTo = function (num) {
            return num.toString(this.radix);
        };
        Converter.prototype.convertFrom = function (str) {
            return parseInt(str, this.radix);
        };
        return Converter;
    }());
    exports.Converter = Converter;
});
//# sourceMappingURL=convert.js.map