var Name = 'bugtrap'

function myFunction() {
    bar = 2
    console.log(Name)
}

myFunction() //bugtrap
console.log(Name) //bugtrap
console.log(bar, window.bar) //2 2
delete window.bar //true
console.log(window.bar) //undefined
delete Name //false
console.log(Name); //bugtrap
eval('var name=2') //name-->"2"

function bar(value) {
    var testValue = 'inner'
    var result = testValue + value

    function innser() {
        return result
    }
    return innser()
}

console.log(bar('fun')) //innerfun
{
    let a = 1
    console.log(a) //1
}
console.log(a) //Uncaught ReferenceError: a is not defined