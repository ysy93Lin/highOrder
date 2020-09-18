/* class Event {
    constructor() {
        this.list = []
        this.callbacks = []
    }

    on(key, callback) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(callback)
    }

    emit() {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.list[key]

        if (!fns || fns.length === 0) return

        fns.forEach(fn => fn.call(this, ...arguments))
    }

    remove(key, fn) {
        var fns = this.list[key]

        if (!fns) return false

        if (!fn) {
            fn && (fns.length = 0)
        } else {
            for (let i = fns.length - 1; i >= 0; i--) {
                if (fns[i] == fn) {
                    fns.splice(i, 1) // 删除订阅者的回调函数
                }
            }
        }
    }
}

let e = new Event()
function f1(data) {
    console.log(data);
}
e.on("black", f1)

e.on("red", data => {
    console.log(data)
})

e.remove("black", f1)
e.emit("red", 42)
e.emit("black", 40)


 */


class Event {
    constructor() {
        this.list = []
        this.callbacks = []
    }

    on(key, callback) {
        if (!this.list[key]) {
            this.list[key] = []
        }

        this.list[key].push(callback)
    }

    emit() {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.list[key]

        if (!fns || fns.length === 0) return

        fns.forEach(fn => {
            fn.call(this, ...arguments)
        });
    }

    remove(key, fn) {
        let fns = this.list[key]

        if (!fns) {
            fns && (fns.length = 0)
        } else {
            for (let i = fns.length - 1; i >= 0; i--) {
                if (fns[i] == fn) {
                    fns.splice(i, 1)
                }
            }
        }

    }
}

let e = new Event()

function f1(data) {
    console.log(data)
}

e.on("black", f1)

e.emit("black", 40)
e.remove("black", f1)
e.emit("black", 42)