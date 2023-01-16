function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function opDebounce(fn, delay, leading) {
    let timer = null;
    let first = true;
    return function () {
        let context = this;
        let args = arguments;
        if (first && leading) {
            fn.apply(context, args);
            first = false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
