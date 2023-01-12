function dayOfTheYear(date) {
    let days = 1;
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}

function isFirstofFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}
