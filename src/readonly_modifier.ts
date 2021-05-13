// readonly modifier
// 首先它是一个关键字,它可以对类中的属性成员进行修饰,被修饰的成员就不会在外部被随意修改了

class Stu {
  readonly school: string;
  constructor(school: string) {
    this.school = school;
  }

  public changeSchool() {
    //   this.school="anhui"//只读属性不能修改
  }
}

const sh = new Stu("ShangHai School");
sh.school;
