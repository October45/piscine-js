function flow(arr) {
    return function (...args) {
        if (args.length > 1) {
            args = [arr[0](...args)];
        }
        return arr.reduce((acc, fn) => fn(acc), args[0]);
    };
}
