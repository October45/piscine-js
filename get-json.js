async function getJSON(path = '', params = {}) {
    const url =
        path +
        '?' +
        Object.keys(params)
            .map((key) => {
                return (
                    key.replace(' ', '+') +
                    '=' +
                    params[key].toString().replace(' ', '+')
                );
            })
            .join('&');
    const res = await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    });
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data;
}
