// public 默认修饰符 公用修饰符
// protected 受保护的修饰符 可以在本类和子类中使用
// private 私有修饰符 在类内
// readonly 只读修饰符 
var final = /** @class */ (function () {
    function final() {
    }
    final.prototype.constrcutor = function (sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    };
    final.prototype.sayHellow = function () {
        console.log('小姐姐对你说：你好');
    };
    final.prototype.sayLove = function () {
        console.log('小姐姐对你说：我爱你');
    };
    return final;
}());
var finalStr = new final('女', 'ywf', 28);
console.log(finalStr.sex);
console.log(finalStr.name);
console.log(finalStr.age);
finalStr.sayHellow();
finalStr.sayLove();
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
man.sex = '女';
