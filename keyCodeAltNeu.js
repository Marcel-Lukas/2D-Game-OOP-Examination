// https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/keyCode

// https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/code


window.addEventListener("keydown", (event) => {

    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    
});


window.addEventListener("keyup", (event) => {

    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    
});



window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case " ": // Leertaste
            keyboard.SPACE = true;
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case " ": // Leertaste
            keyboard.SPACE = false;
            break;
    }
});