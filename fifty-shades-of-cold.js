import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });
    console.log(style.innerHTML);
    head.appendChild(style);
}

function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            body.appendChild(div);
        }
    });
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade;
    });
}

export { generateClasses, generateColdShades, choseShade };
