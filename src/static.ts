//static methods

class DataForTest {
  //静态属性
  static desc: string;
  name: string;
  constructor(name: string) {
    //此时this是实例对象,不能通过实力对象来调用静态属性
    this.name = name;
  }
  test(): void {
    console.log("just for test");
  }

  static Menber(): void {
    console.log("this is a static member");
  }
}

const sft = new DataForTest("sft");
sft.test();
console.log(sft);

//调用静态对象:
//可以读取可以修改
DataForTest.desc = "this is desc";
console.log(
  "%c 🍭 DataForTest.desc: ",
  "font-size:20px;background-color: #ED9EC7;color:#fff;",
  DataForTest.desc
);
DataForTest.Menber = function () {
  console.log("content updated");
};

DataForTest.Menber();

/**
 * 总结:
 * 静态成员:在类中通过static修饰的属性或者方法,那么就是静态属性及静态方法,称之为静态成员
 * 静态成员在使用的时候是通过类名. 的这种语法来调用的,可以读取也可以修改属性的值;
 * 构造函数是不能通过static进行修饰的
 */
