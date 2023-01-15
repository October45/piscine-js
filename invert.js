function invert(obj) {
    const inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
