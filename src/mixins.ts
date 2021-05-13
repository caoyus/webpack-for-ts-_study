// Mixins
//多态:父类型的引用指向子类型的对象,不同类型的对象针对相同的方法产生了不同的行为

//定义一个父类

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string): void {
    console.log(`${this.name} eatting ${food}`);
  }
}

//定义几个子类

class Cat extends Animal {
  //调用父类的构造函数实现子类中属性的初始化
  constructor(name: string) {
    super(name);
  }
  eatFood(food: string) {
    super.eat(food);
  }
}

class Dog extends Animal {
  readonly hobby: string;
  constructor(hobby: string, name: string) {
    super(name);
    this.hobby = hobby;
  }
  paly(): void {
    console.log(`${this.name} like playing ${this.hobby}`);
  }
}

const doge = new Dog("ball", "doge");
doge.paly();

interface IName {
  readonly id: number;
  name: string;
  gender?: string;
  readonly grade: number;
}

const nagisa: IName = {
  id: 1,
  name: "nagisa",
  grade: 100,
};

class Tool {
  stuList: Array<object> = [];

  setInfo(obj: object): void {
    this.stuList = [...this.stuList, obj];
  }
  showStuList(): void {
    console.log(this.stuList);
  }
}

const tool = new Tool();
tool.setInfo(nagisa);
tool.showStuList();

// ================================
