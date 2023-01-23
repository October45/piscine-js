async function series(arr) {
    var result = [];
    for (const item of arr) {
        result.push(await item());
    }
    return result;
}
