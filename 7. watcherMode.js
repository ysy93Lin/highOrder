// 被观察者
class Subject {
    constructor(name, state) {
        this.name = name
        this.observerList = []
        this.state = state
    }

    addObserver(obj) {
        this.observerList.push(obj)
    }

    removeObserver(obj) {
        this.observerList.find((o, index) => {
            if (o === obj) {
                this.observerList.splice(index, 1)
            }
        })
    }

    notify(newState) {
        this.state = newState
        this.observerList.forEach(o => {
            o.upd(this.name, newState)
        })
    }
}

// 观察者
class Observer {
    constructor(name) {
        this.name = name
    }

    upd(obj, newState) {
        console.log(`${this.name}被通知说${obj}${newState}`)
    }
}

let subject = new Subject("小宝宝", "心情很好")
let o1 = new Observer("爸爸")
let o2 = new Observer("妈妈")

subject.addObserver(o1)
subject.addObserver(o2)
subject.notify("心情不好了")
subject.removeObserver(o2)
subject.notify("心情变好了")