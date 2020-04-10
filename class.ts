// TypeScript 是基于类的面向对象的编程语言

class testClass{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    findSister(){
        console.log('找到ywf小姐姐')
    }
}

let jiejie: testClass = new testClass('范冰冰',18)
console.log(jiejie);
jiejie.findSister();