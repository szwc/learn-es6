// 数组的解构赋值
// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

/**
 * “模式匹配”
 * 只要等号两边的模式相同，左边的变量就会被赋予对应的值。-------------
 * 
 */

//  let [a,b,c] = [1,2,3]
//  console.log(a) //1
//  console.log(b) //2
//  console.log(c) //3

//  let [,,foo] = ['haha','hehe','xixi']
//  console.log(foo) //xixi

//  let [foo,[bar],baz] = ['foo',['bar'],'baz']
//  console.log(foo) //foo
//  console.log(bar) //bar
//  console.log(baz) //baz

 // 如果解构不成功，变量的值就等于undefined。
//  let [foo] = []
//  console.log(foo)  //undefined

//不完全结构 即等号左边的模式，只匹配一部分的等号右边的数组-----------------
// let [a,b] = [1,2,3]
//  console.log(a) //1
//  console.log(b) //2

 // 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
//  let [foo] = 1
//  let [foo] = false
//  let [foo] = NaN
//  let [foo] = undefined
//  let [foo] = null
//  let [foo] = {}
//  console.log(foo) //报错

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。-------------------------  不懂

/**
 * 默认值
 * 解构赋值允许指定默认值
 * ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
 */
// let [foo = 1] = ['a']
// let [foo = 1] = [2]
// let [foo = 1] = [undefined]   //默认值生效
// let [foo = 1] = []           //默认值生效
// let [foo = 1] = [null]
// let [foo = 1] = [false]
// let [foo = 1] = [{}]
// console.log(foo)

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
// let [x=1,y=x] = [] // x =1,y=1
// let [x=1,y=x] = [2] // x =2,y=2
// let [x=1,y=x] = [2,3] // x =2,y=3
// let [x=y,y=1] = [] // 报错 x使用y时，y还未定义
// let [x=y,y=1] = [2,3] // 不报错 
// console.log(x,y)