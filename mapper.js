function map(arr, action) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(action(arr[i], i, arr));
    }
    return res;
}

function flatMap(arr, action) {
    return arr.reduce(
        (acc, val, i, arr) => acc.concat(action(val, i, arr)),
        []
    );
}
