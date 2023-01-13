function longWords(arr) {
    return arr.every((item) => item.length >= 5);
}

function oneLongWord(arr) {
    return arr.some((item) => item.length >= 10);
}

function noLongWords(arr) {
    return arr.every((item) => item.length < 7);
}
