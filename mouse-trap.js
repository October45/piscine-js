var circles = [];
var box;
class Circle {
    // Creates an instance of a circle
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = null;
        this.draw();
        circles.push(this);
    }
    // "Draws" the circle by creating a div and appending it to the body
    draw() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
        this.HTML.style.background = "white";
        this.trapped();
        document.body.appendChild(this.HTML);
    }
    // Moves the circle to the given x and y coordinates
    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = this.y + "px";
            this.HTML.style.left = this.x + "px";
        } else {
            if (this.inReactangle(x, y)) {
                this.x = x;
                this.y = y;
                this.HTML.style.top = this.y + "px";
                this.HTML.style.left = this.x + "px";
            } else {
                if (this.inReactangle(x, this.y)) {
                    this.x = x;
                    this.HTML.style.left = this.x + "px";
                } else if (this.inReactangle(this.x, y)) {
                    this.y = y;
                    this.HTML.style.top = this.y + "px";
                }
            }
        }
    }
    // Checks if the circle is inside the box
    trapped() {
        if (
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height
        ) {
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        } else {
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }
    // Checks if the given x and y coordinates for the circle are inside the box
    inReactangle(x, y) {
        if (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}

class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML);
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1; // -1 to account for the border
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1; // +1 to account for the border
        this.height = this.HTML.offsetHeight + 1;
    }
}

document.body.addEventListener("click", (e) => {
    createCircle(e);
});

document.body.addEventListener("mousemove", (e) => {
    moveCircle(e);
});

function createCircle(e) {
    if (e === undefined) return;
    new Circle(e.clientX - 25, e.clientY - 25);
}

function moveCircle(e) {
    if (e === undefined || circles.length === 0) return;
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
    box = new Box();
}

export { createCircle, moveCircle, setBox };
