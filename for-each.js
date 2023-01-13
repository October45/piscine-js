function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}
