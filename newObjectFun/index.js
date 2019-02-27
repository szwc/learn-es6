// es6 对象的新增方法

/**
 * 1. Object.is()
 * 比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
 * 不同之处只有两个：一是+0不等于-0，二是NaN等于自身
 */
console.log(Object.is('foo','foo')); //true
let a = {a:'aa'}
let b = {a:'aa'}
console.log(Object.is(a,b)) //false
console.log(+0 === -0) // true
console.log(Object.is(+0,-0)) //false
console.log(NaN === NaN) // false
console.log(Object.is(NaN,NaN)) //true


/**
 * 2.Object.assign()
 */


/**
 * 3.Object.getOwnPropertyDescriptors()
 * 返回指定对象所有自身属性（非继承属性）的描述对象
 * */ 
