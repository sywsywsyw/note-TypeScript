// public 默认修饰符 公用修饰符
// protected 受保护的修饰符 可以在本类和子类中使用
// private 私有修饰符 在类内
// readonly 只读修饰符 
class final{
    public sex:string
    protected name:string
    private age:number
    public constrcutor(sex:string,name:string,age:number){
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    public sayHellow(){
        console.log('小姐姐对你说：你好');
    }

    protected sayLove(){
        console.log('小姐姐对你说：我爱你')
    }
}

let finalStr:final = new final('女','ywf',28);
console.log(finalStr.sex);
console.log(finalStr.name);
console.log(finalStr.age);
finalStr.sayHellow();
finalStr.sayLove();


class Man {
    public readonly sex: string = '男'
}

var man: Man = new Man()
man.sex = '女'