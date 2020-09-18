// after 在多少次之后执行
function after(time, callback) {
    return function() {
        if (--time == 0) {
            callback()
        }
    }
}

let fn = after(3, function() {
    console.log("after")
})

fn();
fn();
fn();