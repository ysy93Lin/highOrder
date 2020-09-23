/* 
 * 让父类中的属性和方法在子类实例的原型链上
 * CHILD.prototype = new PARENT(); 
 * 特点：（实质是查找而不是拷贝）
    1. 不像其他语言中的继承一样（其它语言的继承一般是拷贝继承，也就是子类继承父类，会把父类中的属性和方法拷贝一份到子类中，供子类的实例调取使用）,它是把父类的原型放到子类实例的原型链上，实例想调取这些方法，是基于__proto__原型链查找机制完成的。
    2. 子类可以重写父类上的方法（这样会导致父类其他的实例也受到影响）
    3. 父类中私有或者公有的属性方法，最后都会变成子类中公有的属性和方法
*/

function A(x) {
    this.x = x;
}

function B(y) {
    this.y = y;
}

A.prototype.getX = function () {
    console.log(this.y);
}

B.prototype = new A(100);  // 主要一步

let b = new B(200);
console.log(b.x, b.y);