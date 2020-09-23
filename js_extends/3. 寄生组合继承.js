/* 
 * 寄生组合继承： CALL继承 + 类似于原型继承
 * 特点： 父类私有和公有的分别是子类实例的私有和共有属性方法（推荐）
 */

function A(x) {
    this.x = x;
}

A.prototype.getX = function() {
    console.log(this.x);
}

function B(y) {
    A.call(this, 200);
    this.y = y;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.getY = function() {
    console.log(this.y);
}


let b = new B(199);
console.log(b);
console.log(b.x);


/* Object.create = function(obj) {
    function Fn() {}
    Fn.prototype = obj;
    return new Fn();
} */