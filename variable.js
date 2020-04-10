// 变量类型  ts属于强类型，声明的时候必须告诉程序，这是个什么类型，js属于弱类型。
// undefined
var undeFined;
console.log(undeFined);
// string
var stringVariable = '我是string variable';
console.log(stringVariable);
// number
var numberVariable = 8888;
console.log(numberVariable);
// Boolean
var booleanVariable = true;
console.log(booleanVariable);
// enum 枚举类型，用于一个类的对象是有限且固定的，比如男人，女人，中性人，一般使用大写命名
var PEOPLE;
(function (PEOPLE) {
    PEOPLE["man"] = "\u7537\u4EBA";
    PEOPLE["woman"] = "\u5973\u4EBA";
    PEOPLE["genderBender"] = "\u4E2D\u6027\u4EBA";
})(PEOPLE || (PEOPLE = {}));
;
console.log(PEOPLE.man);
// any 任意类型  我们js习惯了弱类型语言，这个类型就是允许你随意改变变量的类型
var anyVariable = 888;
anyVariable = true;
anyVariable = 'anyVariable从数字888变为布尔true最后变成了字符串类型,';
console.log(anyVariable);
// Array
var arrayVariable = [1, 2, 3, 4, 5];
console.log(arrayVariable);
// null 
var nullVariable = null;
console.log(nullVariable);
