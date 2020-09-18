// AOP 面向切面编程 把原来代码切成片，在中间加上我自己的代码
// 装饰器 扩展原有的方法 重写原有的方法

function say() {
    console.log("say hi")
}


Function.prototype.before = function(fn) {
    let that = this;
    return function() {   // == > newFn()
        fn();
        that(...arguments)
    }
}

let newFn = say.before(function() {
    console.log("say Hello")
})

newFn("I")