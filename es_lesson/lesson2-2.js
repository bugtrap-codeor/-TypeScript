// for 循环
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr, length; i++) {
  console.log(arr[i])
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    break//  遇到2停止
    //continue   遇到2继续
  }
  // console.log(arr[i])
}
// forEach  ES5新增API  不支持continue和break
arr.forEach(function (item) {
  if (item === 2) {
    // continue
  }
  // console.log(item)
})
// every  ES5新增API  默认返回false，不进行下一次遍历
arr.every(function (item) {
  if (item === 2) {//遇到2停止

  } else {
    // console.log(item)
  }
  return true
})
// for in 为object设计，数组是对象，数组可遍历，
// arr.a = 8 遍历数组缺陷：也会遍历自定义数组的属性a和其值8
for (let index in arr) {//index是字符串
  if (index * 1 === 2) {//index * 1转换为数字，可用===
    continue
  }
  // console.log(index, arr[index])
}
// for of ES6新增 允许自定义数据结构 ->可遍历
for (let item of arr) {
  // console.log(item)
}

const Price = {//自定义数据结构Price,（想返回最小值）
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}

for (let key in Price) {
  // console.log(key, Price[key])
}

// 第二小节 转换
// ES5中向数组转换
// let args = [].slice.call(arguments) // collection  arguments转换为数组
// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList  选出DOM上所有img
// console.log(args)

// ES6中向数组转换
// Array.prototype.from（数组对象.数组原型对象.API）
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()

// let array = Array(5) 初始化长度为5并赋值都为1数组
// array.forEach (function(i) {
//   array[i] = 1 
// })
// for (let i = 0, len = array.length; i < len; i++) {
//   array[i] = 1   每个元素都为1，但不是声明时初始化赋值
// }
// console.log(array)
// 伪数组2特征：按索引方式存储数据、具length属性
// Array.from(arrayLike 伪数组,mapFn map函数,thisArg 接收参数)
// let array = Array.from({ length: 5 }, function () { return 1 })

// console.log(array)
// {0:'a',1:'b',length:2}

// 第三小节 ES5生成新数组
// let array = Array(5)
// let array = []
// Array.push(1)

// ES6生成新数组
// let array = Array.of(1,2,3,4,5)
// console.log(array)

// Array.prototype.fill  填充数组
//
// let array = Array(5).fill(7)
// console.log(array)
// Array.fill(value,start,end)
let array = [1, 2, 3, 4, 5]
// console.log(array.fill(8, 2, 4))  1，2，8，8，5

// ES5查找
// let find = array.filter(function (item) {
//   return item % 2 === 0   所有元素为偶数
// })
// console.log(find)         filter返回数组，缺陷：数组长度大，想查询是否有某元素，低效（会遍历所有）
// ES6查找
// Array.prototype.find

let find = array.find(function (item) {
  return item % 2 === 0
})
console.log(find)  //find返回满足条件第一个值，不再继续寻找
let find = array.findIndex(function (item) {
  return item % 2 === 0
})
console.log(find)  //返回值的索引
// Array.prototype.findIndex
