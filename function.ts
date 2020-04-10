// 函数

// 定义函数
function searchSmallSister(age: number): string {
    return 'sxiaobi找了一个' + age + '岁的小姐姐'
}
let result: string = searchSmallSister(28);
console.log(result, '我是基本定义函数 parasm:number');

// 可选参数的函数
function searchSmallGirl(age: number, stature?: number): string {
    return 'sxiaobi找了一个' + age + '岁' + stature + 'cm的小姐姐'
}
let girlResult: string = searchSmallGirl(20, 178);
console.log(girlResult, '我是可选参数身高 params?:number的小姐姐');

// 有默认值的函数
function searchYoungLaday(age: number = 20, stature: number = 170, thorax: string = '34D'): string {
    return `sxiaobi找了一个${age}岁${stature}cm${thorax}的小姐姐`;
}
let youngLaday: string = searchYoungLaday();
console.log(youngLaday, '我是默认参数 params:string="34D"的小姐姐');

// 有剩余参数的函数
function searchSmallWoman(...age: string[]): string {
    let yy: string = '找了一个';
    for (let index in age) {
        let indexT: any = index;
        yy = yy + age[indexT];
        if (indexT < age.length - 1) {
            yy = yy + '、';
        }
    }
    return `sxiaobi${yy}的小姐姐`;
}
let smallWoman: string = searchSmallWoman('20岁', '175cm', '34D', '上海陆家嘴');
console.log(smallWoman, '我是有剩余参数的 ...params:string[]')


/* 三种定义方法 */

// 函数声明法
function add(one: number, two: number): number {
    return one + two;
}
console.log(add(1, 2));
// 函数表达式法
var plus = function (one: number, two: number): number {
    return one + two;
}
console.log(plus(1, 2));
// 箭头函数
var sum = (one: number, two: number): number => {
    return one + two;
}
console.log(sum(1, 2));