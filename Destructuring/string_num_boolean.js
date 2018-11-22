// 字符串的解构赋值
/**
 * 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
 * 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
 */
let [a,b,c,d,e] = 'hello'
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

let {length:len} = 'hello'
console.log(len)


// 数值和布尔值的解构赋值
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString:s} = 123
console.log(s === Number.prototype.toString)  // true

let {toString:h} = true
console.log(h === Boolean.prototype.toString)  // true

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// let {prop:x} = undefined
// console.log(x)

// let {prop:y} = null
// console.log(y)
