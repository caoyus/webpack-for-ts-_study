//statement_files
//引入第三方的js库 jquery
//使用jquery

// 1.引入
// import jQuery from "jquery";
//2.定义操作

// declare var jQuery: (sleector: string) => any;

//3.使用

/**
 * 当使用第三方库的时候,我们需要引用他的声明文件,才能获得对应的代码补全,接口提示等功能
 * 声明语句:如果需要ts对新语法进行检查,需要加载了对应类型的说明代码
 * declare var jquery:(selector:string)=>any
 * 声明文件:把声明语句单独放到一个文件中比如jquery.d.ts中,ts会自动解析到项目中的所有的声明文件
 * 如何下载声明文件呢??
 * npm i @types/jquery --save-dev
 */
import jquery from "jquery";
jquery("");
