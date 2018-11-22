// 对象的解构赋值

/**
 * 对象的解构与数组有一个重要的不同。
 * 数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */

// let {foo,bar} = {foo:'aaa',bar:'bbb'}
// console.log(foo)
// console.log(bar)

// let {bar,foo,baz} = {foo:'ccc',bar:'bbb'}
// console.log(bar)  //'bbb'
// console.log(foo)   //'ccc'
// console.log(baz)    //undefined

// 上面 实际上是 let {bar:bar,foo:foo,baz:baz} = {foo:'ccc',bar:'bbb'} 的简写，被赋值的是后者
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。


//与数组一样，解构也可以用于嵌套结构的对象。------------

// let obj = {
//     p: [
//       'Hello',
//       { y: 'World' }
//     ]
//   }

//   let {p:[x,{y}]} = obj  // 这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。
//   let {p,p:[x,{y}]} = obj
//   console.log(p)
//   console.log(x)
//   console.log(y)

// let obj = {};
// let arr = [];

// ({foo: obj.prop,bar: arr[0] } = {foo:123,bar:'bar'})
// console.log(obj)    // {prop:123}
// console.log(arr) // ['bar']


/**
 * 对象的解构也可以指定默认值
 * 默认值生效的条件是，对象的属性值严格等于undefined。
 * 
 */

//  let {x=3} = {}  //x = 3
//  let {x=3} = {x:undefined}  //x = 3
//  let {x=3} = {x:null}  //x = 3
//  let {x=3} = {x:4}  //x = 3
//  let {x=3} = {x:'a'}  //x = 3
//  let {x=3} = {x:true}  //x = 3
//  let {x=3} = {x:{a:'a'}}  //x = 3
//  console.log(x)

// 如果解构失败，变量的值等于undefined
// let {foo} = {bar:'bar'}
// console.log(foo)

//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// let {foo:{bar}} = {baz:'baz'} 
//上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。
//原因很简单，因为foo这时等于undefined，再取子属性就会报错，
// let {foo:{bar}} = {baz:'baz',foo:{a:'hehhe'}} 
// console.log(bar)


//如果要将一个已经声明的变量用于解构赋值，必须非常小心。 
// let x;
// {x} = {x: 1}; 
//上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。
//只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
// ({x} = {x:1})
// console.log(x)


// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
console.log(first) // 1
console.log(last) // 3
