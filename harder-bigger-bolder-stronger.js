function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;
        letter.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
        );
        if (i < 40) {
            letter.style.fontWeight = "300";
        } else if (i < 80) {
            letter.style.fontWeight = "400";
        } else {
            letter.style.fontWeight = "600";
        }
        document.getElementsByTagName("body")[0].appendChild(letter);
    }
}

export { generateLetters };
