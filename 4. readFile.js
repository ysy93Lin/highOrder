const fs = require("fs")

function after(times, callback) {  // 使用after函数，可以简化异步操作
    let arr = [];
    return function (r) {
        arr.push(r);
        if (--times === 0) {
            callback(arr)
        }
    }
}

let newFn = after(2, function (arr) {
    console.log(arr) // 当异步完成后触发此方法
})

// 异步不支持try-catch
// 同步"异步的返回结果"，异步"并行"paralle  "串行"series
fs.readFile("./name.txt", "utf8", function (err, data) {
    newFn(data)
})

fs.readFile("./age.txt", "utf8", function (err, data) {
    newFn(data)
})
