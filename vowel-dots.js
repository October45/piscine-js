const vowels = /[aeiou]/gi;
function vowelDots(str) {
    return str.replace(/[aeiou]/gi, function (v) {
        return v + ".";
    });
}
