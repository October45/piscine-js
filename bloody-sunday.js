function bloodySunday(date) {
    let counter = -1;
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let start = new Date("0001-01-01T00:00:00");
    while (start <= date) {
        start.setDate(start.getDate() + 1);
        counter++;
    }
    console.log(week[counter % 6]);
    return week[counter % 6];
}
