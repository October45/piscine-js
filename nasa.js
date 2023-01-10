function nasa(int) {
    var result = "";
    for (var i = 1; i <= int; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result + "NASA";
        } else if (i % 3 === 0) {
            result = result + "NA";
        } else if (i % 5 === 0) {
            result = result + "SA";
        } else {
            result = result + i.toString();
        }
        if (i !== int) {
            result = result + " ";
        }
    }
    return result;
}
