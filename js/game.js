let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    initLevel();
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyboard);
}


function playSound(sound, volume) {
    sound.volume = volume;
    sound.play();
}


let canPlayAgain = true;

function playSoundInterval(sound, volume, interval) {
  if (canPlayAgain) {
    sound.volume = volume;
    sound.play();
    canPlayAgain = false;
    setTimeout(() => {
        canPlayAgain = true;
    }, interval);
  }
}



window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keyboard.RIGHT = true;
            break;
        case "a":
            keyboard.LEFT = true;
            break;
        case "s":
            keyboard.DOWN = true;
            break;


        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
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
        case "s":
            keyboard.DOWN = false;
            break;


        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
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