function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            const res = await callback(...args);
            return res;
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}

function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeout = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const functionCall = new Promise((resolve) =>
            resolve(callback(...args))
        );
        const res = await Promise.race([timeout, functionCall]).then(
            (res) => res
        );
        if (res instanceof Error) {
            throw res;
        }
        return res;
    };
}
