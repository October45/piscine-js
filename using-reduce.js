function adder(arr, value) {
    return arr.reduce(
        (acc, item) => acc + item,
        value === undefined ? 0 : value
    );
}

function sumOrMul(arr, value) {
    return arr.reduce(
        (acc, item) => {
            if (item % 2 === 0) {
                return acc * item;
            } else {
                return acc + item;
            }
        },
        value === undefined ? 0 : value
    );
}

function funcExec(arr, value) {
    return arr.reduce(
        (acc, item) => {
            if (typeof item === "function") {
                return item(acc, value);
            } else {
                return acc;
            }
        },
        value === undefined ? 0 : value
    );
}
