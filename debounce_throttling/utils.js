function debounce(fn, wait, immediate) {
    let timeout = null, result
    let debounced = function () {
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            let isImmediate = !timeout
            timeout = clearTimeout(() => timeout = null, wait)

            if (isImmediate) {
                result = fn(arguments)
            }
        } else {
            timeout = setTimeout(() => result = fn(arguments), wait)
        }
    }

    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null  // 防止内存泄漏
    }

    return debounced
}

// 节流(时间戳)
/* function throttle(fn, delay) {
    let prev = Date.now()
    return function () {
        let now = Date.now()
        if (now - prev >= delay) {
            fn(arguments)
            prev = Date.now()
        }
    }
} */

// 节流throttle(定时器)
/* function throttle(fn, delay) {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(fn, delay)
    }
}
 */

// 节流throttle(时间戳+定时器)
function throttle(fn, delay) {
    let timeout = null
    let prev = Date.now()
    return function () {
        let now = Date.now()
        let remaining = delay - (now - prev)
        clearTimeout(timeout)
        if (remaining <= 0) {
            fn(arguments)
            prev = Date.now()
        } else {
            timeout = setTimeout(fn, remaining)
        }
    }
}