// -----------------------------------------------------------

interface Search {
  search();
}
interface Login {
  login();
}

interface Feature extends Search, Login {}

class ApiHandles implements Feature {
  search() {
    return "Search";
  }
  login() {
    console.log("sucess");
  }
}

// ----------------------------------------------------------------

class Student {
  readonly id: number;
  name: string;
  age: number;
  gender?: string;
  constructor(
    id: number = 1,
    name: string = "miku",
    age: number,
    gender?: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  changeName(str: string): string {
    if (str.trim().length > 0) {
      this.name = str;
      return this.name;
    }
  }
}

const stu = new Student(1, "nagisa", 18);
stu.changeName("sekai");
console.log(stu.name);

//A类继承B类,A就叫子类也叫派生类,B就叫基类,也叫超类
class Miku extends Student {
  constructor(id: number, name: string, age: number, gender?: string) {
    super(id, name, age, gender);
  }
  //子类中可以直接来用父类中的方法,也可以重写父类中的方法
  changedName(str: string) {
    super.changeName(str);
  }
}

const miku = new Miku(1, "miku", 18);
miku.changedName("sakura");
console.log(miku);
