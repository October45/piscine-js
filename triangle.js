function triangle(char, n) {
    let str = "";
    for (var i = 1; i <= n; i++) {
        str = str + char.repeat(i) + "\n";
    }
    return str.slice(0, -1);
}
