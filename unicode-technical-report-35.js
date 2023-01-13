Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

function format(date, f) {
    const d = new Date(date);
    const lM = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const sM = lM.map((m) => m.slice(0, 3));
    const lD = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const sD = lD.map((d) => d.slice(0, 3));

    // Day
    f = f.replace(/dd/g, ("0" + d.date()).slice(-2));
    f = f.replace(/d/g, d.date());

    // Hour
    f = f.replace(/HH/g, ("0" + d.hours()).slice(-2));
    f = f.replace(/H/g, d.hours());
    f = f.replace(/hh/g, ("0" + (d.hours() % 12 || 12)).slice(-2));
    f = f.replace(/h/g, d.hours() % 12 || 12);

    // Minute
    f = f.replace(/mm/g, ("0" + d.getMinutes()).slice(-2));
    f = f.replace(/m/g, d.getMinutes());

    // Second
    f = f.replace(/ss/g, ("0" + d.getSeconds()).slice(-2));
    f = f.replace(/s/g, d.getSeconds());

    // Era
    f = f.replace(/GGGG/g, d.year() < 0 ? "Before Christ" : "Anno Domini");
    f = f.replace(/G/g, d.year() < 0 ? "BC" : "AD");

    // Year
    if (d.year() < 0) d.setFullYear(-d.year());
    f = f.replace(/yyyy/g, d.year().toString().padStart(4, "0"));
    f = f.replace(/y/g, d.year().toString().replace(/^0+/, ""));

    // AM/PM
    f = f.replace(/a/g, d.hours() < 12 ? "AM" : "PM");

    // Month
    f = f.replace(
        /(?<!M)MM(?!M)/g,
        (d.month() + 1).toString().length < 10
            ? "0" + (d.month() + 1)
            : d.month() + 1
    );
    f = f.replace(/(?<!(M|P|A))M(?!M)/g, d.month() + 1);
    f = f.replace(/MMMM/g, lM[d.month()]);
    f = f.replace(/MMM/g, sM[d.month()].slice(0, 3));

    // Day of the Week
    f = f.replace(/EEEE/g, lD[d.getDay()]);
    f = f.replace(/E/g, sD[d.getDay()].slice(0, 3));

    return f;
}
