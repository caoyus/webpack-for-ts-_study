//interface
//ts的核心原则之一是对值所具有的结构进行类型的检查,我们使用接口来定义对象的类型,也就是说接口是对象属性和方法的抽象(状态和行为的抽象)

interface IPerson {
  readonly id: number; //必须有且只读
  name: string;
  age: number;
  gender?: string; //可选
}

let person: IPerson = {
  id: 1,
  name: "nagisa",
  age: 18,
  //   gender: "female",
};
// person.id=100

// -----------------------------------------------------------------------

//通过接口的方式作为函数类型的设置

interface IFindFunc {
  (source: string, subString: string): boolean;
}

const findSubstrInSource: IFindFunc = function (source, subString) {
  return source.search(subString) > -1;
};

findSubstrInSource("nagisa", "na");
console.log(
  "%c 🥐 findSubstrInSource(nagisa, na): ",
  "font-size:20px;background-color: #93C0A4;color:#fff;",
  findSubstrInSource("nagisa", "na")
); //true

//类实现接口
//类可以通过接口的方式来定义当前这个类的类型
//类可以实现一个接口,类可以实现多个接口,注意的是接口中的内容都要真正的实现
interface IFly {
  fly();
}

interface Ilogin {
  login();
}

class Person implements IFly, Ilogin {
  fly() {
    return "flying";
  }
  login() {
    console.log("sucess");
  }
}

const p = new Person();

p.fly();
console.log(
  "%c 🥨 p.fly(): ",
  "font-size:20px;background-color: #FFDD4D;color:#fff;",
  p.fly()
);

//接口可以继承其他的多个接口
interface IMore extends Ilogin, IFly {}

class More implements IMore {
  login() {
    console.log("sucess");
  }
  fly() {
    return "flying";
  }
}

const mo = new More();

mo.login();
