let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    initLevel();
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keyboard.RIGHT = true;
            break;
        case "a":
            keyboard.LEFT = true;
            break;

        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;

        case "r":
            keyboard.SHOOT = true;
            break;
        case "f":
            keyboard.THROW = true;
            break;

        case " ":
            keyboard.SPACE = true;
            break;
        case "ArrowUp":
            keyboard.SPACE = true;
            break;
        case "w":
            keyboard.SPACE = true;
            break;

    }
});


window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "d":
            keyboard.RIGHT = false;
            break;
        case "a":
            keyboard.LEFT = false;
            break;

        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;

        case "r":
            keyboard.SHOOT = false;
            break;
        case "f":
            keyboard.THROW = false;
            break;

        case " ":
            keyboard.SPACE = false;
            break;
        case "ArrowUp":
            keyboard.SPACE = false;
            break;
        case "w":
            keyboard.SPACE = false;
            break;
    }
});