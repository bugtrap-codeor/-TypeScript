# TypeScript

2020-4-3
学习前提：ES6+JS
2012 年由微软发布，场景：Angular、Vue、React
TypeScript(ES6(ES5)),超级 Javascript,将轻量的语法带入 JS 中，对
**静态类型、面向对象**支持良好，可使用 JS 之外的**扩展语法**，利于构建**健壮的、可维护的**大型项目

## 课程安排

1.TS 基础语法 2.爬虫功能开发
3.TS 语法进阶 4.项目接口开发
5.TS 高级语法 6.项目代码重构 7.项目前端开发 8.课程总结

## 课程知识点

静态类型、类型注解、类型推断、泛型、类型定义文件、模块化、打包编译、装饰器、Metadata、设计模式、实战问题（node+react+express)…

## 课程收获

进阶至中高级前端工程师、应对企业级别的 TS 项目、在框架层面有更深的理解、扩展技术视野

## 编辑器 VSCode

[Typescript 官网](https://www.typescriptlang.org/)TypeScript 是 JavaScript 的类型化超集，可编译为普通 JavaScript。

```Typescript
let a = 123;
a = '123'; // JS中是动态类型

let b: number = 123;//定义变量b，类型是number，初始值是123
b = '123'; 报错，Type '"123"' is not assignable to type 'number'Typescript是静态类型(写死的)

interface Person {
    name:string
}
const teacher:Person = {
    name:'bugtrap'
}
```

## 优势

1.更好的错误提示 2.语法提示 3.类型声明，可读性强

```Typescript

interface Point { x: number, y: number }

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

npm install typescript -g 全局安装 typescript
tsc xx.ts 编译 ts 为 js
node xx.js 执行 xx.js 文件
npm install -g ts-node 全局安装 ts-node
ts-node xx.ts 即可运行 ts 文件
//结构赋值类型注解

function add({ num1, num2}:{ num1: number,num2: number}): number{
    return num1+num2
}
const total = add({ num1 :1, num2 : 2})
function getn({ n }: { n : number }):number{
    return n
}
const n = getn({ n: 1})

//数组
const arr: (number | string)[] = [1, '2', 3]
const strArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined]

//type alias 类型别名
type User = { name: string; age: number }
const objectArr: User[] = [
  {
    name: 'bugtrap',
    age: 24,
  },
]

class Student {
  name: string
  age: number
}
const objectAr: Student[] = [
  new Student(),
  {
    name: 'bugtrap',
    age: 24,
  },
]

//元组 tuple csv,excel导出...
const studentInfo: [string, string, number] = ['bugtrap', 'male', 18]
//CSV
const studentList: [string, string, number][] = [
  ['bugtrap', 'male', 18],
  ['Eass', 'male', 26],
  ['Jeff', 'female', 22],
]

```

2-11
