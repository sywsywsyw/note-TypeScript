// 继承  单重继承
class parentClass{
    public name:string
    public age:number
    public skill:string
    constructor(name: string, age: number,skill:string){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public interest(){
        console.log('父类的方法')
    }
}

let parentObj:parentClass = new parentClass('子小',20,'web');
parentObj.interest();

class childrenClass extends parentClass{
    public childrenName:string;
    public childrenAge:number;
    public childrenSkill:string;
    constructor(childrenName: string, childrenAge: number, childrenSkill:string){
        super('子小', 20, 'web');
        this.childrenName = childrenName;
        this.childrenAge = childrenAge;
        this.childrenSkill = childrenSkill;
    }
    public interest(){
        super.interest();
        console.log('子类从写了父类的方法')
    }
    public loveGril(){
        console.log('子类泡妞')
    }
}
let chilrenObj:childrenClass = new childrenClass('小子',12,'泡妞');
chilrenObj.loveGril();
chilrenObj.interest();
