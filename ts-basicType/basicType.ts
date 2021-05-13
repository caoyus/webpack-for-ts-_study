//basicType

// ==>boolean
let flag: boolean = true;
//==>number
let n: number = 123;
let m: number = 0o12; //八进制类型
let x: number = 0xa; //十六进制类型
let y: number = 0b1010; //二进制
//==>string
let str: string = "nagisa";

/**
 * 总结：ts中变量一开始是什么类型，后期赋值的时候只能用这个类型的数据，否则报错
 */
//==>undefined
let un: undefined = undefined;
//==>null
let nu: null = null;

//undefined 和null都可以作为其他类型的子类型 ，也就是说能赋值给其他类型的变量，比如说number类型的数据

let num: number = undefined;
let s: string = null;
console.log(num);

//数组类型和元组类型：

/**
 * 数组的定义方式一：let 变量名：数据类型[]=[...]
 * 定义方式二：let 变量名:Array<数据类型> =[...]
 */

let arr01: string[] = ["1", "sekai"];
let arr02: Array<string> = ["2", "nagisa"];
console.log(arr01, arr02);
/**
 * 数组定义后，里面的数据类型必须和数组定义的时候的数据类型一致，否则报错
 */
let arr03: [string, number, boolean] = ["nagisa", 123, true];
//元组类型使用的时候，数据类型的位置和数据的个数应该和定义元组的时候的类型和位置是一一对应的

console.log(
  arr03[0].charAt(0).toUpperCase() + arr03[0].substr(1, arr03[0].length - 1)
);

//枚举类型

//定义一个颜色的枚举

enum Color {
  red,
  blue,
  green,
}
//定义一个Color的枚举里面的每个数据都可以叫做元素，每个元素都有自己的编号，是从0开始计数的
let color: Color = Color.blue;
console.log(color); //1
console.log(Color.red, Color.blue, Color.green); //012

enum Nagisa {
  name,
  age,
  gender,
  hobby,
}

//==>any;代表可以存储任何类型的数据
// 数组中存储的数据类型和个数不确定时可以使用any
let randomItem: Array<any> = [1, "123", true, undefined];

//==>void:表示没有任何类型,当一个函数没有返回值的时候,返回值是void

function foo(): void {
  console.log("no return");
  return null; //返回null也是代表没有返回值的
}
foo();
console.log(foo()); //undefined

//定义void的变量,一般不这么搞
let vd: void = null;

//==>object:表示非原始类型,也就是出去string,number,Boolean,之外的类型;

function bar(obj: object): object {
  return obj;
}

let obj: object = {
  name: "sekai",
  age: 18,
};

console.log(bar(obj));

function getStr(str: number | string): void {
  console.log(str);
}

function getlength(str: number | string): number {
  let length = (<string>str).length
    ? (<string>str).length
    : str.toString().length;
  return length;
}

getlength(123);
console.log(
  "%c 🍱 getlength(123): ",
  "font-size:20px;background-color: #7F2B82;color:#fff;",
  getlength(123)
);

//类型断言:告诉编译器我知道自己是什么类型,也知道自己干什么
//语法一:<类型>变量名
//语法二:值 as 类型

function testTypeLength(str: number | string): void {
  if ((<string>str).length) {
    console.log((str as string).length);
  } else {
    console.log((str as number).toString().length);
  }
}

testTypeLength(13);

//类型推断:在没有明确指定类型的时候会根据值直接推断一个类型

let txt = "nagisa"; //推断出是string类型
// txt=100==>报错

let any; //他推断出是any类型
any = 100;
any = "sekai";
