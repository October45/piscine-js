function currify(fn) {
    return function currified(...args) {
        return args.length >= fn.length
            ? fn(...args)
            : currified.bind(null, ...args);
    };
}
