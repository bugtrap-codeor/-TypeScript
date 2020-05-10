### ES6
>let和const块级作用域
>如{}、if（）{}、for、try-catch等等
>但var obj = {a:1}不属于块级，代表对象
Let只作用在块级作用域内
``` javascript
let a = '我是封闭作用域的a';
{
    console.log(a);
    let a = '再赋值';
}
console.log(a);//报错
```
使用let或者const声明的变量不能再被重新声明
let不存在变量提升
暂存死区
生成十个按钮每个按点击的时候弹出1-10
```javascript
var i = 0;
for(i = 1;i<= 10;i++){
	(function(i){
	var btn = document.createElement('button');
	btn.innerText = i;
	btn.onclick = function(){
		alert(i)
	};
	document.body.appendChild(btn);
	})(i);
}

for(let i = 1;i<= 10;i++){ 
    var btn = document.createElement('button'); 
    btn.innerText = i; 
    btn.onclick = function(){ 
	    alert(i)
    }; 
    document.body.appendChild(btn);
}
```