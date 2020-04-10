// 变量类型  ts属于强类型，声明的时候必须告诉程序，这是个什么类型，js属于弱类型。

// undefined
let undeFined:any;
console.log(undeFined);

// string
let stringVariable:string = '我是string variable';
console.log(stringVariable);

// number
let numberVariable:number = 8888;
console.log(numberVariable);

// Boolean
let booleanVariable:Boolean = true;
console.log(booleanVariable);

// enum 枚举类型，用于一个类的对象是有限且固定的，比如男人，女人，中性人，一般使用大写命名
enum PEOPLE{man='男人',woman='女人',genderBender='中性人'};
console.log(PEOPLE.man);

// any 任意类型  我们js习惯了弱类型语言，这个类型就是允许你随意改变变量的类型
let anyVariable:any = 888;
anyVariable = true;
anyVariable = 'anyVariable从数字888变为布尔true最后变成了字符串类型,';
console.log(anyVariable);

// Array
let arrayVariable = [1,2,3,4,5];
console.log(arrayVariable);

// null 
let nullVariable = null;
console.log(nullVariable);
 