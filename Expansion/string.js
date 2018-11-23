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
 * padStarg() padEnd()  补全
 * 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
 * 接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
 */
console.log('x'.padStart(5,'cc'))  //'ccccx'
console.log('x'.padEnd(5,'cc'))  //'xcccc'
