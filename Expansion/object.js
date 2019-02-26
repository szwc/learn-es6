// 对象的扩展

//1 属性的简洁表示方法-----------------------------------------------------
/**
 * ES6 允许直接写入变量和函数，作为对象的属性和方法
 */
//简单属性
// es5
var obj = {
    foo:'foo'
}
console.log(obj,'obj')
//es6 
let foo = 'foo'
let obj6 = {foo}
console.log('obj6',obj6)

let aa = 'aa'
let bb = 'bb'
let cc = 'cc'
let abc = {
    aa,
    bb,
    cc
}
console.log(abc,'abc')

//方法
// es5
let f5obj = {
    fn:function(){
        console.log(555)
    }
}
f5obj.fn();
//es6
let f6obj = {
    fn(){
        console.log(666)
    }
}
f6obj.fn();

//2 属性名表达式
// es5
let attr5Obj = {
    a:'aa',
    c:'cc'
}
console.log(attr5Obj,'attr5obj')
// es6  属性名表达式
// 支持变量
let attrVal = 'hh'
let attr6Obj = {
    a:'aa',
    ['b'+'c']:'bc',
    [attrVal]:'hheh',
    ['f'+'un'](){
        console.log('fun')
    }
}

console.log(attr6Obj,'attr6obj')
console.log(attr6Obj.fun())

// 3.属性的可枚举性和遍历
/**
 * 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为
 * 描述对象的enumerable属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性
 */
let enumberObj = {foo:'foo'}
let config = Object.getOwnPropertyDescriptor(enumberObj,'foo')
console.log(config,'config')
// { value: 'foo',
//   writable: true,
//   enumerable: true,
//   configurable: true } 
/**
 * 目前，有四个操作会忽略enumerable为false的属性。

for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
 */