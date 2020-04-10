// 接口 用于定义一些规范
interface GirlRequest{
    sex:string
    skill:string
    beautiful?:boolean  // 可选参数
}
let myGirl:GirlRequest = {sex:'女',skill:'爱我'};
console.log(myGirl);


// 规范函数类型接口
interface SearchMan{
    (source:string,subString:string):boolean
}
let mySearch: SearchMan = function (source: string, subString: string): boolean{
    let flag = source.search(subString);
    return flag != -1;
}
console.log(mySearch('高、富、帅、德', '胖'))
 