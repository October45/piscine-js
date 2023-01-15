function filterValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        if (callback(obj[key])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        res[key] = callback(obj[key]);
    }
    return res;
}

function reduceValues(obj, callback, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
}
