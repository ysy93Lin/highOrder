// 参数是函数，返回值是函数的属于高阶函数

/**
 * 柯里化：把变量和方法保存在函数中不销毁；把接收多个参数的函数变换成接收一个单一参数的函数（单一参数为多数中的第一个）
 * 函数柯里化思想：一个JS预处理的思想，降低通用性，提高适用性
 * 特点：
 *      1. 参数复用：需要输入多个参数，最终只需输入一个，其余通过arguments来获取
 *      2. 提前返回：避免重复去判断某一条件是否符合，不符合则return不再继续执行下面的操作
 *      3. 延迟执行：避免重复的去执行程序，等真正需要结果的时候再执行
 *  核心原理：利用函数执行可以形成一个不销毁的私有作用域，把预先处理的内容都存在这个不销毁的作用域里面，并返回一个小函数，以后要执行的就是这个小函数
 */

/**
 * 包装成高阶函数，批量生成函数
 */
function isType(type) {
    return function (obj) {
        return Object.prototype.toString.call(obj).includes(type)
    }
}

let types = ["String", "Object", "Array", "Null", "Undefined", "Boolean", "Symbol", "Bigint"]

let fns = {}

types.forEach(type => fns['is' + type] = isType(type)) // 批量生成方法

let a = "true"
console.log(fns.isString(a)) // 函数柯里化


/**
 * 回调：
 *  1). 可以解决预置参数的问题， bind也是预置参数的作用
 *  2). 解决异步问题
 */