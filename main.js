//块级作用域,如{}、if（）{}、for、try-catch等等   但var obj = {a:1}不属于块级，代表对象
//Let只作用在块级作用域内
// {
//     var a = 1;
//     let b = 2;
// }
// console.log(a);
// console.log(b);
//使用Let或者const声明的变量不能再被重新声明
//Let不存在变量提升
//暂存死区
//a:生成十个按钮每个按点击的时候弹出1-10
// var i = 0; 
// for(i = 1;i<= 10;i++){ 
// (function(i){ 
// var btn = document.createElement('button'); 
// btn.innerText = i; 
// btn.onclick = function(){ 
// alert(i)}; 
// document.body.appendChild(btn); 
// })(i); 
// }
for(let i = 1;i<= 10;i++){ 
    var btn = document.createElement('button'); 
        btn.innerText = i; 
        btn.onclick = function(){ 
            alert(i)
        }; 
    document.body.appendChild(btn);
}