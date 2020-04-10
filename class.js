// TypeScript 是基于类的面向对象的编程语言
var testClass = /** @class */ (function () {
    function testClass(name, age) {
        this.name = name;
        this.age = age;
    }
    testClass.prototype.findSister = function () {
        console.log('找到ywf小姐姐');
    };
    return testClass;
}());
var jiejie = new testClass('范冰冰', 18);
console.log(jiejie);
jiejie.findSister();
