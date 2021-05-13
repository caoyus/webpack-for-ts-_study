// abstract Class
/**
 * 抽象类作为其他的派生类的基类进行使用,他不能被实例化,不同于接口,抽象类可以包含成员的实现细节;抽象方法一般没有具体内容的实现
 */

abstract class AbClass {
  //   abstract toDo(): void {
  //     //抽象方法中不能有具体的实现
  //     console.log("todo something");
  //   }
  //   abstract desc: string;
  abstract eat();
  run(): void {
    console.log("running");
  }
}
//抽象类的使用:派生类继承抽象类,里面的抽象属性必须具体化
class SubClass extends AbClass {
  //   desc: "this is desc";//抽象属性一般不会这样来实现
  eat(): void {
    console.log("eatting");
  }
}

const subclass = new SubClass();
subclass.eat(); //eatting
