var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承  单重继承
var parentClass = /** @class */ (function () {
    function parentClass(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    parentClass.prototype.interest = function () {
        console.log('父类的方法');
    };
    return parentClass;
}());
var parentObj = new parentClass('子小', 20, 'web');
parentObj.interest();
var childrenClass = /** @class */ (function (_super) {
    __extends(childrenClass, _super);
    function childrenClass(childrenName, childrenAge, childrenSkill) {
        var _this = _super.call(this, '子小', 20, 'web') || this;
        _this.childrenName = childrenName;
        _this.childrenAge = childrenAge;
        _this.childrenSkill = childrenSkill;
        return _this;
    }
    childrenClass.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('子类从写了父类的方法');
    };
    childrenClass.prototype.loveGril = function () {
        console.log('子类泡妞');
    };
    return childrenClass;
}(parentClass));
var chilrenObj = new childrenClass('小子', 12, '泡妞');
chilrenObj.loveGril();
chilrenObj.interest();
