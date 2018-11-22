# 变量的解构赋值 (Destructuring)
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象
由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

## 数组的解构赋值

#### 模式匹配
可完全匹配 或不完全匹配
如果等号的右边不是数组，将会报错

```
let [foo,[bar],baz] = [1,[2],3]
let [a,b] = [4,5,6]
```
#### 默认值
解构赋值允许指定默认值
ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

```
let [foo = 1] = ['a']   //foo = 'a'
let [foo = 1] = [null]  //foo = null
let [foo = 1] = [{}]    //foo = {}
let [foo = 1] = []    //foo = 1
```

## 对象的解构赋值
对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
解构失败，值为undefined

#### 模式匹配

```
let { foo, bar } = { foo: "aaa", bar: "bbb" };

//嵌套
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
```

#### 默认值
默认值生效的条件是，对象的属性值严格等于undefined。

```
var {x = 3} = {x: undefined}; // x=3

var {x = 3} = {x: null};  // x=null

```

如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
```
let {foo: {bar}} = {baz: 'baz'}; // 报错
```

##　字符串的解构赋值
```
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

##　字符串的解构赋值
```
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true


let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

## 函数参数的解构赋值

## 圆括号问题

#### 不能使用圆括号的情况
 - 变量声明语句
 - 函数参数   函数参数也属于变量声明，因此不能带有圆括号。
 - 赋值语句的模式

```
//1.
// let [(a)] = [1]  // SyntaxError: Unexpected token (
// let [x:(c)] = {x:'x'}
// let ({x:c}) = {}

//2.
// function f([(z)]) {return z} //报错
// function f([z,(x)]) { return x; } //报错

//3.
// ({p:a}) = {p:'a'}
// ([a]) = [5]
```

#### 能使用圆括号的情况

可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

```
[(b)] = [5];
 console.log(b);

({p:(d)} = {});
console.log(d);

[(parseInt.prop)] = [3];
console.log(parseInt.prop)
```
