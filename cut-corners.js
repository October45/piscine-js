function round(int) {
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let counter = 0;
    while (!(int < 1 && int > -1)) {
        int -= 1;
        counter++;
    }
    if (int < 0.5) {
        if (neg) {
            return -counter;
        } else {
            return counter;
        }
    } else {
        if (neg) {
            return -counter - 1;
        } else {
            return counter + 1;
        }
    }
}

function floor(int) {
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter - 1;
    } else {
        return counter;
    }
}

function ceil(int) {
    if (!int) return 0;
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy >= 0)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    } else {
        return counter + 1;
    }
}

function trunc(int) {
    let counter = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}
