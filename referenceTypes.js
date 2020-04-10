// 引用类型  Array  String Date RegExp
// 数组
// 字面量赋值法
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
// 构造函数赋值法 new
var arr3 = new Array(1, 2, 3, 4);
console.log(arr1, arr2, arr3);
// 字符串
var string1 = 'sxiaobi';
var string2 = new String('sxiaobi');
console.log(string1, string2);
// 日期
// 不传递参数
var date = new Date();
// 传递一个数字
var dateNumber = new Date(1000);
var dateString = new Date('2019/09/07 05:06:30');
console.log(date, dateNumber, dateString);
