// 发布 订阅
/**
 * 发布订阅模式的特点：
 *      1. 支持简单的广播通信，当对象状态发生变化时，会自动通知已经订阅过的对象
 *      2. 发布者与订阅者耦合性降低，发布者只管发布一条消息出去，它不关心这条消息如何被订阅者使用，同事，订阅者只监听发布者的事件名，只要发布者的事件名不变，它不管发布者如何改变
 * 使用场景:  用于ajax请求，请求有成功和失败的回调函数，我们可以订阅ajax的success和error事件。我们并不关心对象在异步运行的状态，我们只关心success/error的时候我们需要做点我们自己的事情就可以了
 * 
 * 缺点: 1.创建订阅者需要消耗一定的时间和内存
 *       2.虽然可以弱化对象之间的联系，如果过度使用的话，反而使代码不好理解及代码不好维护等
 */
const fs = require("fs")

// observer watcher dep
function Event() {
    this.callbacks = []
    this.data = []
}

Event.prototype.on = function (callback) {
    this.callbacks.push(callback)
}

Event.prototype.emit = function (data) {
    this.data.push(data)
    this.callbacks.forEach(c => c(this.data))
}

let e = new Event()

e.on((data) => {
    if (data.length === 2) {
        console.log(data)
    }
})

fs.readFile("./age.txt", "utf8", (err, data) => {
    e.emit(data)
})

fs.readFile("./name.txt", "utf8", (err, data) => {
    e.emit(data)
})



var shoeObj = {} // 定义发布者
shoeObj.list = []  // 缓存列表 存放订阅者回调函数

// 增加订阅者
shoeObj.emit = function (key, fn) {
    if (!this.list[key]) {
        // 如果还没有订阅过此消息，给该类消息创建一个缓存列表
        this.list[key] = []
    }
    this.list[key].push(fn)   // 订阅消息添加到缓存列表
}

// 发布消息
shoeObj.on = function () {
    var key = Array.prototype.shift.call(arguments) // 取出消息类型名称
    var fns = this.list[key]    // 取出该消息对应的回调函数的集合
    
    // 如果没有订阅过该消息的话， 则返回
    if (!fns || fns.length == 0) return

    fns.forEach(fn => fn.apply(this, arguments))
}

// 小明订阅消息
/* shoeObj.emit("red", function () {
    console.log(...arguments)
}) */

// 小白订阅消息
shoeObj.emit("black", function () {
    console.log("再次打印", ...arguments)
})

shoeObj.on("red", 40)
shoeObj.on("black", 42)


