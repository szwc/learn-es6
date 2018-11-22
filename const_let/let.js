// let 关键字 声明变量

 
// let a =1
// console.log(a);

//let声明的变量 在let所在的代码块有效
// {
//     let a = 1
//     var b = 2
// }
// console.log(a)  // 报错
// console.log(b)

//for循环中 -----------------------------------------------------

// var a = []
// for(let i=0;i<10;i++){
//     console.log(i)
//     a[i] = function(){
//         console.log(i)
//     }
// }
// a[6]()   // 6

// for循环 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
// for(let i=0;i<3;i++){
//     let i = 'abc'
//     console.log(i) // 打印了三次abc 说明 父 子各自有单独的作用域
// }

// 不存在变量提升----------------------------------------------------
// console.log(i) // 报错   用时还未声明 故报错
// let i = 5

// console.log(i)   // undefined
// var i = 4


//暂时性死区--------------------------------------------------------
/**
 * 在代码块内，使用let命令声明变量之前，该变量都是不可用的。
 * 这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
 */

// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响
// var tmp = 123

// {
//     tmp = 'abc'
//     let tmp          //let声明了tmp 所以tmp绑定在这个区域 不受外部影响 所以在let声明变量前，对tmp赋值会报错
// }


// let x = x           // 在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“。


// 不允许重复声明   --------------------------------------------------
// let不允许在相同作用域内，重复声明同一个变量。
// var a = 2
// let a = 3  //报错

var a = 3
{
    let a = 4  // 不报错
}