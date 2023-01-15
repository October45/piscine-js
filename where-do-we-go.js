import { places } from "./where-do-we-go.data.js";

var scroll = window.scrollY;
const location = document.createElement("a");
location.classList.add("location");
document.body.appendChild(location);

document.addEventListener("DOMContentLoaded", () => {
    selectPlace();
});

document.addEventListener("scroll", () => {
    selectPlace();
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

function explore() {
    // Places/sections
    places.sort(compareCoordinates);
    console.log(places);
    places.forEach((place) => {
        createSection(place);
    });
    // Compass
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
}

function createSection(place) {
    let section = document.createElement("section");
    section.style.background = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat";
    section.style.width = "100%";
    section.style.height = "100vh";
    document.body.appendChild(section);
}

function selectPlace() {
    const sectionHeight = window.innerHeight;
    const scroll = window.scrollY + sectionHeight / 2;
    const sectionIndex = Math.floor(scroll / sectionHeight);
    const place = places[sectionIndex];
    location.textContent = `${place.name}\n${place.coordinates}`;
    location.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(
        place.coordinates
    )}/`;
    console.log(
        location.href
            .split("%C2%B0")
            .join("°")
            .split("%22")
            .join('"')
            .split("%20")
            .join(" ")
    );
    location.target = "_blank";
    location.style.color = place.color;
}

function urlEncodeCoordinates(coordinates) {
    return coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");
}

function compareCoordinates(a, b) {
    const aDirection = a.coordinates.split(" ")[0].split('"')[1];
    const bDirection = b.coordinates.split(" ")[0].split('"')[1];
    const aLat = a.coordinates.split(" ")[0];
    const bLat = b.coordinates.split(" ")[0];
    let aLatDeg = parseInt(aLat.split("°")[0]);
    let aLatMin = parseInt(aLat.split("°")[1].split("'")[0]);
    let aLatSec = parseInt(aLat.split("°")[1].split("'")[1].split('"')[0]);
    let bLatDeg = parseInt(bLat.split("°")[0]);
    let bLatMin = parseInt(bLat.split("°")[1].split("'")[0]);
    let bLatSec = parseInt(bLat.split("°")[1].split("'")[1].split('"')[0]);
    if (aDirection === "S") {
        aLatDeg = -aLatDeg;
        aLatMin = -aLatMin;
        aLatSec = -aLatSec;
    }
    if (bDirection === "S") {
        bLatDeg = -bLatDeg;
        bLatMin = -bLatMin;
        bLatSec = -bLatSec;
    }
    if (aLatDeg > bLatDeg) {
        return -1;
    }
    if (aLatDeg < bLatDeg) {
        return 1;
    }
    if (aLatDeg === bLatDeg) {
        if (aLatMin > bLatMin) {
            return -1;
        }
        if (aLatMin < bLatMin) {
            return 1;
        }
        if (aLatMin === bLatMin) {
            if (aLatSec > bLatSec) {
                return 1;
            }
            if (aLatSec < bLatSec) {
                return -1;
            }
            if (aLatSec === bLatSec) {
                return 0;
            }
        }
    }
}

export { explore };
