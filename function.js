// 函数
// 定义函数
function searchSmallSister(age) {
    return 'sxiaobi找了一个' + age + '岁的小姐姐';
}
var result = searchSmallSister(28);
console.log(result, '我是基本定义函数 parasm:number');
// 可选参数的函数
function searchSmallGirl(age, stature) {
    return 'sxiaobi找了一个' + age + '岁' + stature + 'cm的小姐姐';
}
var girlResult = searchSmallGirl(20, 178);
console.log(girlResult, '我是可选参数身高 params?:number的小姐姐');
// 有默认值的函数
function searchYoungLaday(age, stature, thorax) {
    if (age === void 0) { age = 20; }
    if (stature === void 0) { stature = 170; }
    if (thorax === void 0) { thorax = '34D'; }
    return "sxiaobi\u627E\u4E86\u4E00\u4E2A" + age + "\u5C81" + stature + "cm" + thorax + "\u7684\u5C0F\u59D0\u59D0";
}
var youngLaday = searchYoungLaday();
console.log(youngLaday, '我是默认参数 params:string="34D"的小姐姐');
// 有剩余参数的函数
function searchSmallWoman() {
    var age = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        age[_i] = arguments[_i];
    }
    var yy = '找了一个';
    for (var index in age) {
        var indexT = index;
        yy = yy + age[indexT];
        if (indexT < age.length - 1) {
            yy = yy + '、';
        }
    }
    return "sxiaobi" + yy + "\u7684\u5C0F\u59D0\u59D0";
}
var smallWoman = searchSmallWoman('20岁', '175cm', '34D', '上海陆家嘴');
console.log(smallWoman, '我是有剩余参数的 ...params:string[]');
/* 三种定义方法 */
// 函数声明法
function add(one, two) {
    return one + two;
}
console.log(add(1, 2));
// 函数表达式法
var plus = function (one, two) {
    return one + two;
};
console.log(plus(1, 2));
// 箭头函数
var sum = function (one, two) {
    return one + two;
};
console.log(sum(1, 2));
