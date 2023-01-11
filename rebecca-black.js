function isFriday(date) {
    return new Date(date).getDay() === 5;
}

function isWeekend(date) {
    var day = new Date(date).getDay();
    return day === 0 || day === 6;
}

function isLeapYear(date) {
    var year = new Date(date).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    var d = new Date(date);
    return (
        new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate()
    );
}
