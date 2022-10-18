function dogYears(planet, age) {
    const seconds = 31557600;

    const mercury = 0.2408467;
    const venus = 0.61519726;
    const mars = 1.8808158;
    const jupiter = 11.862615;
    const saturn = 29.447498;
    const uranus = 84.016846;
    const neptune = 164.79132;

    let earthAge = (age / seconds) * 7;
    let planetAge = earthAge;
    switch (planet) {
        case "mercury":
            planetAge = earthAge / mercury;
            break;
        case "venus":
            planetAge = earthAge / venus;
            break;
        case "mars":
            planetAge = earthAge / mars;
            break;
        case "jupiter":
            planetAge = earthAge / jupiter;
            break;
        case "saturn":
            planetAge = earthAge / saturn;
            break;
        case "uranus":
            planetAge = earthAge / uranus;
            break;
        case "neptune":
            planetAge = earthAge / neptune;
            break;
        default:
            planetAge = earthAge;
            break;
    }
    return Number(planetAge.toFixed(2));
}

console.log(dogYears("earth", 1000000000));
