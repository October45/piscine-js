const urlExp =
    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;
function getURL(dataSet) {
    let result = dataSet.match(urlExp);
    return result;
}

function greedyQuery(dataSet) {
    dataSet = getURL(dataSet);
    let result = dataSet.filter((url) => {
        return (
            url.match(
                /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g
            ) !== null
        );
    });
    return result;
}

function notSoGreedy(dataSet) {
    dataSet = getURL(dataSet);
    let result = dataSet.filter((url) => {
        return (
            url.match(
                /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g
            ) !== null
        );
    });
    return result;
}
