function get(key) {
    return eval("sourceObject." + key);
}

function set(key, value) {
    if (typeof value === "string") {
        eval("sourceObject." + key + "='" + value + "'");
    } else {
        eval("sourceObject." + key + "=" + value);
    }
    return value;
}
