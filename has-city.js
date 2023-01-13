function hasCity(country, cities) {
    return function (city) {
        if (cities.indexOf(city) === -1) {
            return city + " is not a city from " + country;
        }
        return city + " is a city from " + country;
    };
}
