function indexOf(arr, item, index) {
    for (var i = index || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, item, index) {
    for (var i = index || arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

function includes(arr, item, index) {
    return indexOf(arr, item, index) !== -1;
}
