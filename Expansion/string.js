// 字符串的扩展

/**
 * includes(), startsWith(), endsWith()
 * includes()：返回布尔值，表示是否找到了参数字符串。
 * startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
 * endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
 */

//  let s = 'hello world!'
//  console.log(s.includes('hello'))  //true
//  console.log(s.startsWith('hello')) //true
//  console.log(s.endsWith('!'))   //true

 // 这三个方法都支持第二个参数，表示开始搜索的位置。
//  console.log(s.includes('hello',5))  //false
//  console.log(s.startsWith('hello',5)) //false
//  console.log(s.endsWith('hello',5))     //true
 //上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。
 //它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

 /**
  * repeat
  * repeat方法返回一个新字符串，表示将原字符串重复n次。
  * 1. 参数如果是小数，会被取整。
  * 2.参数是负数或者Infinity，会报错。
  * 3.如果参数是 0 到-1 之间的小数，则等同于 0
  * 4.参数NaN等同于 0。
  * 5.参数是字符串，则会先转换成数字
  */

//   console.log('na'.repeat(2))  //nana
//   console.log('na'.repeat())  //''
//   console.log('na'.repeat(0))  //''
//   console.log('na'.repeat(-1))  //RangeError: Invalid count value
//   console.log('na'.repeat(-0.9))  //''
//   console.log('na'.repeat(NaN))  //''
//   console.log('na'.repeat('haha'))  //''
//   console.log('na'.repeat({}))  //''

/**
 * padStart() padEnd()  补全
 * 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
 * 接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
 * 1.如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
 * 2.如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串
 * 3.如果省略第二个参数，默认使用空格补全长度。
 * 4.常见用途
 *  a. 为数值补全指定位数
 *  b. 提示字符串格式。
 */
// console.log('x'.padStart(5,'cc'))  //'ccccx'
// console.log('x'.padEnd(5,'cc'))  //'xcccc'
// // 1.
// console.log('xbcd'.padStart(2,'ss')) // 'xbcd'
// // 2.
// console.log('ss'.padStart(10,'0123456789')) // '01234567ss'
// // 3.
// console.log('ss'.padStart(5))  // '   ss'
// // 4
// // a
// console.log('1'.padStart(10, '0'))    // "0000000001"
// // b
// console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"

/**
 * matchAll
 * matchAll方法返回一个正则表达式在当前字符串的所有匹配，详见《正则的扩展》的一章。
 */


/**
 * 模板字符串 
 * 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
 * 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
 * 1.如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
 * 2.如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
 * */ 

//  console.log(`this is first  template string`)

// 多行
//  console.log(`in jsavsjfsd this 
//  is sfsdjf sfjdsl`)  
 
//  //在字符串中嵌入变量   模板字符串中嵌入变量，需要将变量名写在${}之中。
//  let name = 'Bob'
//  let age = 24
//  console.log(`a people name is ${name} and age is ${age}`)
// //1.
//  console.log(` hahah \`sdf\`s`)
//  //2.
//  console.log(`
//                 home 
//               go home
//               and sleep
//               `)  
// 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
// let x =2,y=5
// console.log(`${x}+${y}=${x+y}`)
// // 如果大括号中的值不是字符串，将按照一般的规则转为字符串
// let obj = {a:'aa'}
// console.log(`obj is ${obj}`)
// // 模板字符串甚至还能嵌套。
// let arr = [{name:'zs',age:23},{name:'ls',age:45}]
// console.log(`${arr.map(item=> `name is ${item.name}`)}`)

/**
 * 标签模版   有点难，略。。。
 */

 /**
  * String.raw()
  * 返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串
  */
//  console.log(String.raw(`sdfs${1+2}\sdfsd`));  // 为啥报错啊