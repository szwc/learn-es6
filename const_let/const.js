// const

// const声明一个只读的常量。一旦声明，常量的值就不能改变。----------------------------
/**
 * const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
 * 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
 * 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
 * const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了
 */
// const pi = 3.1415
// pi = 3 // TypeError: Assignment to constant variable.

const foo = {}
foo.prop = 'a' // 不报错
foo = {}       // 报错 TypeError: Assignment to constant variable.

// const一旦声明变量，就必须立即初始化，不能留到以后赋值。
// const foo
// foo = 4  // SyntaxError: Missing initializer in const declaration

// const foo  // SyntaxError: Missing initializer in const declaration--------- 只声明不赋值，就会报错

/**
 * 与let类似 
 * 1.只在声明所在的块级作用域内有效
 * 2.也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
 * 3.不可重复声明。
 */

 // 1
//  {
//      const Max = 5
//  }
//  console.log(Max)

//2
// console.log(Max)
// const Max = 2

//3
// const Max = 2
// const Max = 3