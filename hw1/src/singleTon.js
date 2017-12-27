var Singleton = (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someMethod = function () { };
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
//# sourceMappingURL=singleTon.js.map