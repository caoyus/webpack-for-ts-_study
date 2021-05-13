// modifier==> public ,private,protected

/**
 * 修饰符(类中的成员的修饰符)主要是描述类中成员(属性,构造函数,方法)的课访问性
 *public 修饰符是类中成员默认的修饰符,代表着公共的任何位置都能访问类中的成员;
 *privite修饰符是类中成员默认是私有的,代表着外部是无法访问类中的成员数据的,当然之类中也是无法访问的
 * protected 修饰了属性成员的时候,代表着外部无法访问类中的成员数据,但是子类中可以访问
 */

//定义一个类

class Pers {
  public name: string;
  private age: number;
  protected gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public study(): void {
    console.log(` ${this.name} studying`);
  }
  public getAge(): void {
    console.log(` ${this.name} already ${this.age}`);
  }
  public showGender(): void {
    console.log(this.gender);
  }
}

const p01 = new Pers("sekai", 18, "female");
// p01.age
// p01.gender
p01.study();
p01.getAge();
p01.showGender();

class One extends Pers {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  getAge_one() {
    super.getAge();
  }
  showError() {
    //   console.log(this.age);私有属性,子类中无法访问
    console.log(this.gender); //子类中可以访问
  }
}
