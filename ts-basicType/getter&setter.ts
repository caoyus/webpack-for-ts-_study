// getter/setter // ts中通过getter和setter来截取对对象成员的访问,他能帮助你有效的控制对象成员的访问;

class NameTool {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //使用set和get来控制姓名的数据,同时外部也可以进行修改操作
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  //设置
  set fullName(nameVal) {
    let fullName = nameVal.split(" ");
    this.firstName = fullName[0];
    this.lastName = fullName[1];
  }
}

const nagi = new NameTool("nagisa", "sekai");
console.log(nagi.fullName); //nagisa sekai
//设置属性成员的值
nagi.fullName = "tomoya sekai";

console.log(nagi);
