import { gossips } from "./gossip-grid.data.js";

function grid() {
    //Ranges
    ranges();
    // First gossip card, with a form to add new gossips
    let form = document.createElement("form");
    form.classList.add("gossip");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let gossip = textarea.value;
        if (gossip.length > 0) {
            gossips.unshift(gossip);
            document.querySelectorAll(".gossip").forEach((card, i) => {
                if (i > 0) card.remove();
            });
            textarea.value = "";
            renderGossips();
        }
    });
    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);

    // All other gossip cards
    renderGossips();
}

function renderGossips() {
    gossips.forEach((gossip) => {
        let div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        document.body.appendChild(div);
    });
}

function ranges() {
    // Ranges
    let ranges = document.createElement("div");
    ranges.classList.add("ranges");
    let widthRange = document.createElement("input");
    widthRange.type = "range";
    widthRange.id = "width";
    widthRange.min = "200";
    widthRange.max = "800";
    widthRange.value = "400";
    widthRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.width = e.target.value + "px";
        });
    });
    let fontSizeRange = document.createElement("input");
    fontSizeRange.type = "range";
    fontSizeRange.id = "fontSize";
    fontSizeRange.min = "20";
    fontSizeRange.max = "40";
    fontSizeRange.value = "30";
    fontSizeRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.fontSize = e.target.value + "px";
        });
    });
    let backgroundColorRange = document.createElement("input");
    backgroundColorRange.type = "range";
    backgroundColorRange.id = "background";
    backgroundColorRange.min = "20";
    backgroundColorRange.max = "75";
    backgroundColorRange.value = "50";
    backgroundColorRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`;
        });
    });
    ranges.appendChild(widthRange);
    ranges.appendChild(fontSizeRange);
    ranges.appendChild(backgroundColorRange);
    document.body.appendChild(ranges);
}

export { grid };
