function filterEntries(obj, filter) {
    let res = {};
    for (let key in obj) {
        if (filter([key, obj[key]])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapEntries(entries, mapper) {
    let temp = {};
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]]);
    }
    let res = {};
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1];
    }
    return res;
}

function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue;
    for (let key in entries) {
        acc = reducer(acc, [key, entries[key]]);
    }
    return acc;
}

function lowCarbs(entries) {
    // prettier-ignore
    return filterEntries(entries, (entry) => {let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];return parseInt(value) <= 50;});
}

function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}
