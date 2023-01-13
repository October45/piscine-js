function flow(arr) {
    return function (input) {
        return arr.reduce((acc, fn) => fn(acc), input);
    };
}
