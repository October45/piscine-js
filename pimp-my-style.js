import { styles } from "./pimp-my-style.data.js";
var counter = 0;

function pimp() {
    var button = document.querySelector("button.button");
    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[counter]);
        counter++;
    } else {
        counter--;
        button.classList.remove(styles[counter]);
        if (counter === 0) {
            button.classList.toggle("unpimp");
        }
    }
    if (counter === styles.length) {
        button.classList.toggle("unpimp");
    }
}

export { pimp };
