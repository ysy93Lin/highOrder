/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static char() {
        return "aaa";
    }

    say() {
        return `My name is ${this.name}, ${this.age}`;
    }
}

class Person2 extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

    say() {
        return `${super.say()}, ${this.sex}`;
    }

    static char() {
        return super.char() + ", hahhhahahaha";
    }
}

let p = new Person("little Bai", 18);
console.log(p.say());

let p2 = new Person2("dongdong", 15, "boy");
console.log(p2.say());
// console.log(p2.sex);

console.log(Person2.char()); */

/* class MyMatcher {
    [Symbol.match](string) {
        return "hello world".indexOf(string);
    }
}

console.log('e'.match(new MyMatcher())); */

const e = {};
e[Symbol.match] = str => "hello world".indexOf(str);

console.log("e".match(e));

const x = {}
x[Symbol.replace] = (...s) => console.log(s);

"Hello".replace(x, "World");

class replaceStr {
    constructor(str) {
        this.str = str;
    }

    [Symbol.replace](...s) {
        return s
    }
}

let h = "Hello";

// console.log(h.replace(new replaceStr(), 'World'));

let r = new replaceStr("Hello");
console.log(r.str.replace("Hello", "World"));
// console.log(r.str);


console.log("abc".replace("a", "b"));