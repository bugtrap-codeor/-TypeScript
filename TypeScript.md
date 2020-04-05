# TypeScript

2020-4-3
学习前提：ES6+JS
2012年由微软发布，场景：angela、vue、react
TypeScript(ES6(ES5)),超级Javascript,将轻量的语法带入JS中，对
**静态类型、面向对象**支持良好，可使用JS之外的**扩展语法**，利于构建**健壮的、可维护的**大型项目

## 课程安排

1.TS基础语法
2.爬虫功能开发
3.TS 语法进阶
4.项目接口开发
5.TS高级语法
6.项目代码重构
7.项目前端开发
8.课程总结

## 课程知识点

静态类型、类型注解、类型推断、泛型、类型定义文件、模块化、打包编译、装饰器、Metadata、设计模式、实战问题（node+react+express)…

## 课程收获

进阶至中高级前端工程师、应对企业级别的TS项目、在框架层面有更深的理解、扩展技术视野

## 编辑器VSCode

[Typescript官网](https://www.typescriptlang.org/)TypeScript是JavaScript的类型化超集，可编译为普通JavaScript。

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

1.更好的错误提示
2.语法提示
3.类型声明，可读性强

```Typescript

interface Point { x: number, y: number }

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });
```

2-4
