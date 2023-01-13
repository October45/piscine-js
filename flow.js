function flow(arr) {
    return function () {
        if (arguments.length > 1) {
            let value = arguments[0];
            for (let i = 1; i < arguments.length; i++) {
                value = value + arguments[i];
            }
            return arr[1](value);
        }
        return arr.reduce((acc, fn) => fn(acc), arguments[0]);
    };
}
