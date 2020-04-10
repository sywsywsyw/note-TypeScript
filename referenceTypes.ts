// 引用类型  Array  String Date RegExp

// 数组
// 字面量赋值法
let arr1:number[] = [1,2,3];
let arr2:Array<string> = ['a','b','c'];

// 构造函数赋值法 new
let arr3:number[] = new Array(1,2,3,4);
console.log(arr1,arr2,arr3);

// 字符串
let string1:string = 'sxiaobi';
let string2:String = new String('sxiaobi');
console.log(string1, string2);


// 日期
// 不传递参数
let date:Date = new Date();
// 传递一个数字
let dateNumber:Date = new Date(1000);
let dateString:Date = new Date('2019/09/07 05:06:30');
console.log(date, dateNumber, dateString);
