// function
/**
 *函数:封装了一些重复使用的代码,需要的时候调用即可
 */

const transformStr = function (str: string): object {
  return {
    trasformedStr: str.toUpperCase(),
    createTime: new Date().getTime(),
  };
};

transformStr("sekai");
console.log(
  "%c 🧀 transformStr(sekai): ",
  "font-size:20px;background-color: #2EAFB0;color:#fff;",
  transformStr("sekai")
);

//函数完整的写法
// const arrowFunc:(str:string)=>object=function(str:string):object{
//     return {
//         str:str,
//         desc:"this is desc"
//     }

// }

//默认参数和可选参数
/**
 *
 * @param fName
 * @param lName
 * @returns
 * 函数在声明的时候内部的参数使用了?进行修饰,那么就表示该参数可以传入也可以不用传入,也就是可选参数;
 * 默认参数就是函数在声明的时候,内部参数有自己的默认值,此时的这个参数就是叫默认参数
 */

const transformName = function (
  fName: string,
  lName: string = "tomoya"
): string {
  const result = fName ? fName + " " + lName : lName;
  return result;
};

transformName("");
console.log(
  "%c 🍦 transformName(nagisa, sekai): ",
  "font-size:20px;background-color: #F5CE50;color:#fff;",
  transformName("") //tomoya
);

transformName("sekai");
console.log(
  "%c 🦀 transformName(sekai): ",
  "font-size:20px;background-color: #6EC1C2;color:#fff;",
  transformName("sekai")
);

transformName("miku", "sakura");
console.log(
  "%c 🍗 transformName(miku, sakura): ",
  "font-size:20px;background-color: #6EC1C2;color:#fff;",
  transformName("miku", "sakura")
);

//剩余参数,rest参数
// args

const restFunc = function (str: string, ...args: string[]): void {
  console.log(str, ...args);
};

restFunc("nagisa", "tomoya", "sekai", "miku", "sakura");

//函数的重载:函数的名字相同函数的参数及个数不同

// const append = function (m: number | string, n: number | string) {
//   let arr: Array<number | string> = [];
//   arr.push(m, n);
//   return arr;
// };

// append(1, "nagisa");
// console.log(
//   "%c 🍌 append(1, nagisa): ",
//   "font-size:20px;background-color: #465975;color:#fff;",
//   append(1, "nagisa")
// );
//函数的重载
function append(m: string, n: string): string;
function append(m: number, n: number): number;
function append(m: string | number, n: string | number): string | number {
  if (typeof m === "string" && typeof n === "string") {
    return m + n;
  }
  if (typeof m === "number" && typeof n === "number") {
    return m + n;
  }
}

append(1, 1);
append("n", "m");
// append("1",1)//由于函数的重载,该参数不符合规定
