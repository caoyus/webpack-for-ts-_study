// readonly modifier
// 首先它是一个关键字,它可以对类中的属性成员进行修饰,被修饰的成员就不会在外部被随意修改了

class Stu {
  readonly school: string;
  // 内部有一个具体的属性,外部单例也是无法修改的
  readonly str: string = "nagisa";
  constructor(school: string) {
    this.school = school;
    // 构造函数中可以对只读属性的值进行修改,但是意义不大
    // this.school="anhui"
  }
  //类中的普通方法中也是不能修改只读属性的
  public changeSchool() {
    //   this.school="anhui"//只读属性不能修改
    // this.str=""//内部的方法也是无法修改的
  }
}

const sh = new Stu("ShangHai School");
//
// sh.str = "";

/**
 *如果函数中内部没有参数的时候,类中的方法也是无法修改,实例化的对象中也是无法修改;
 * 如果构造函数中有参数,也就在实例化的过程中对只读属性进行初始化,内部的方法和实例化修改不了 只读属性的值;
 * 构造函数中的参数一但使用readonly进行修饰的话,那他该属性可以叫做参数属性;
 *
 *
 */

//  构造函数中的属性一旦使用readonly进行修饰后,那他的类中就有了这个属性成员;该属性也就只读属性,内部函数和实例化对象都是不能修改的
class Food {
  constructor(readonly name: string = "banana") {
    this.name = name;
  }
}

const pear = new Food("pear");

console.log(pear.name); //pear
// pear.name=""
