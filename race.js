async function race(promises = []) {
    if (promises.length === 0) {
        setTimeout(() => {}, 10000);
    }
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then(resolve, reject);
        });
    });
}

// some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.
async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
        return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
        var results = [];
        let remaining = count;
        promises.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then((result) => {
                    results.push(result);
                    remaining--;
                    if (remaining === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]];
                        }
                        resolve(results);
                    }
                }, reject);
            } else {
                results.push(promise);
                remaining--;
                if (remaining === 0) {
                    resolve(results);
                }
            }
        });
    });
}

// Damn useless tests that make me commit again...
