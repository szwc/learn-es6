//函数参数解构



// 圆括号问题
/**
 * 不能使用圆括号的情况
 * 1.变量声明语句
 * 2.函数参数   函数参数也属于变量声明，因此不能带有圆括号。
 * 3.赋值语句的模式
 */
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

/**
 * 能使用圆括号的情况
 * 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
 */

 [(b)] = [5];
 console.log(b);

({p:(d)} = {});
console.log(d);

[(parseInt.prop)] = [3];
console.log(parseInt.prop)