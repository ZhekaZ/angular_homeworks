(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./classes/convert"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var convert_1 = require("./classes/convert");
    var binary = new convert_1.Converter(2);
    console.log('hello');
    console.log(binary.convertTo(2));
    console.log(binary.convertTo(4));
    console.log(binary.convertFrom('10'));
    console.log(binary.convertFrom('100'));
});
//# sourceMappingURL=converter.js.map