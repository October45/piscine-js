function citiesOnly(arr) {
    return arr.map((item) => item.city);
}

function upperCasingStates(arr) {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

function fahrenheitToCelsius(arr) {
    return arr.map(
        (item) =>
            Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}

function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}

function tempForecasts(arr) {
    return arr.map((item) => {
        return `${
            Math.floor(
                (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${item.city}, ${item.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}
