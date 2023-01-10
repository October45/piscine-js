function groupPrice(str) {
    let prices = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g);
    let res = [];
    if (prices === null) return res;
    prices.forEach((price, i) => {
        res.push([price]);
        res[i].push(price.match(/[0-9]+/g)[0]);
        res[i].push(price.match(/[0-9]+/g)[1]);
    });
    return res;
}
