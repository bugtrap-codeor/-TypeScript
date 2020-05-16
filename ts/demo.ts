// interface Point {
//   x: number
//   y: number
// }

// const point:Point = {
//     x:2,
//     y:1
// }

// const count:number = 2020;

// function tsDemo(data: Point) {
//   console.log('123')
//   return Math.sqrt(data.x ** 2 + data.y ** 2)
// }

// tsDemo({ x: 1, y: 123 })

// 基础类型：null、undefined、symbol、boolean、void、string、number
// let a:number;
// a = 20
// const count:number = 2020;
// const Name:string = 'bugtrap';

// 对象类型:对象{}/class、数组[]、函数function
// const student:{
//     name:string;
//     age:number
// }={
//     name:'bugtrap',
//     age:18
// };
// class Person {}
// const bugtrap:Person = new Person();

// const numbers:number[]=[1,2,3];

// const getTotal:()=>number = ()=>{
//     return 2020;
// }
// const func =(str:string):number=>{
//     return parseInt(str,10)
// }
// 冒号后面跟的是类型，等号后面跟的是函数具体实现
// const func1:(str:string)=>number = (str)=>{
//     return parseInt(str,10)
// }

// const date = new Date()

// const rawData = '{"name":"dell"}'
// const newData:string = JSON.parse(rawData)

// let temp:number|string = 12;
// temp = 'bugtrap';

// type annotation 类型注解 告诉TS 变量是什么类型
// type inference 类型推断 TS会自动尝试分析变量的类型
// const num1 = 1;
// const num2 = 2;
// const add = num1 + num2;

// function getAdd(num1:number,num2:number){
//     return num1+num2;
// }
// const add = getAdd(1,2)

// function hello(){}
// const hello1 = function(){}
// const hello2 = () => {}

// function errorEmitter():never{
//     while(true) {};// 或throw new Error;     后面都不会被执行
// }

// 结构赋值类型注解
// function add({ num1, num2}:{ num1: number,num2: number}): number{
//     return num1+num2
// }
// const total = add({ num1 :1, num2 : 2})
// function getn({ n }: { n : number }):number{
//     return n
// }
// const n = getn({ n: 1})

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

//元组 tuple
const studentInfo: [string, string, number] = ['bugtrap', 'male', 18]
//CSV
const studentList: [string, string, number][] = [
  ['bugtrap', 'male', 18],
  ['Eass', 'male', 26],
  ['Jeff', 'female', 22],
]
