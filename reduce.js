function fold(arr, f, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}

function foldRight(arr, f, acc) {
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}

function reduce(arr, f) {
    let acc = arr[0];
    for (var i = 1; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}

function reduceRight(arr, f) {
    let acc = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
}
