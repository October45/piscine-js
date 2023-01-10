function letterSpaceNumber(str) {
    let arr = str.match(/[a-z] [0-9](?![a-z0-9])/gi);
    return arr !== null ? arr : [];
}
