function A(x) {
    this.x = x;
}

A.prototype.getX = function() {
    console.log(this.x);
}

function B(y, x) {
    A.call(this, x);
    this.y = y;
    this.getY = () => {
        console.log(this.y);
    }
}

// B.prototype.

let b = new B(100, 200);

console.log(b.x, b.y);
b.getY();

