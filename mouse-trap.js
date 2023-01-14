document.body.addEventListener("click", (e) => {
    createCircle(e);
    moveCircle(e);
});

function createCircle(e) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.position = "absolute";
    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
    circle.style.background = "white";
    document.body.appendChild(circle);
}

function moveCircle(e) {
    const circles = document.querySelectorAll(".circle");
    const circle = circles[circles.length - 1];
    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
}

function setBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.position = "absolute";
    box.style.top = "50%";
    box.style.left = "50%";
    document.body.appendChild(box);
}
