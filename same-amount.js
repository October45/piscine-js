function sameAmount(str, rexp1, rexp2) {
    rexp1 = new RegExp(rexp1, "g");
    rexp2 = new RegExp(rexp2, "g");
    let test1 = str.match(rexp1);
    let test2 = str.match(rexp2);
    return test1 !== null && test2 !== null && test1.length === test2.length;
}
