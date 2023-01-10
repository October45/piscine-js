function join(arr, sep) {
    if (sep === null) {
        sep = ",";
    }
    var result = arr[0].toString();
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i];
    }
    return result;
}

function split(str, sep) {
    var result = [];
    var start = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            result.push(str.substring(start, i));
            start = i + 1;
        }
    }
    result.push(str.substring(start));
    return result;
}
