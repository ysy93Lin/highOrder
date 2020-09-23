class A {
    constructor(x) {
        this.x = x;
    }

    getX() {
        console.log(this.x);
    }
}

class B extends A {  // B.prototype.__proto__ = A.prototype
    constructor(y) {
        // 子类只要继承父类，可以不写CONSTRUCTOR，一旦写了，则在CONSTRUCTOR中的第一句话必须是SUPER()

        // 不写CONSTRUCTOR，浏览器会自动默认创建constructor(...args) {super(...args)}
        super(200);  // => A.call(this, 200); 把父类当作普通方法执行，给方法传递参数，让方法中的THIS是子类的实例
        this.y = y;
    }

    getY() {
        console.log(this.y);
    }
}


let b = new B(300);
console.log(b);