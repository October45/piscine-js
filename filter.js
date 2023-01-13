function filter(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reject(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function partition(arr, fn) {
    return [filter(arr, fn), reject(arr, fn)];
}
