//genericity
//指的是定义函数,接口或者类的时候,不预定具体的类型,而是在使用的时候在指定具体类型的一种特性
//定义一个函数传入两个参数,第一个参数是数据,第二个参数是数量,函数的作用是

// function genericity<T>(val: T, count: number): T[] {
//   let arr: Array<T> = [];

//   for (let i = 0; i < count; i++) {
//     arr.push(val);
//   }
//   return arr;
// }

// const arr1 = genericity<string>("nagisa", 3);
// console.log(
//   "%c 🥓 arr1: ",
//   "font-size:20px;background-color: #33A5FF;color:#fff;",
//   arr1
// );

//多个泛型参数的函数

function showSomething<K, V>(val1: K, val2: V): [K, V] {
  return [val1, val2];
}

const arr1 = showSomething<string, number>("nagisa", 10);
console.log(
  "%c 🍞 arr1: ",
  "font-size:20px;background-color: #F5CE50;color:#fff;",
  arr1
);
