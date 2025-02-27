let canvas;
let world;
let keyboard = new Keyboard();
let allIntervalsIDs = [];


function init() {
    initLevel();
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyboard);
}


function startGame() {
    const startOverlay = document.getElementById("start-overlay");
    startOverlay.classList.add("d-none");
    init();
    setTimeout(() => {GAME_SOUND.play();}, 444);
}


function restartGame() {
    const gameOverOverlay = document.getElementById("game-over-overlay");
    const winScreen = document.getElementById("win-overlay");
    gameOverOverlay.classList.add("d-none");
    winScreen.classList.add("d-none");
    init();
    setTimeout(() => {GAME_SOUND.play();}, 444);
}


function setStoppableIverval(fn, time) {
    let id = setInterval(fn, time);
    allIntervalsIDs.push(id);
}


function clearAllIntervals() {
    allIntervalsIDs.forEach(clearInterval);
    allIntervalsIDs.length = 0;
}


function toggleImpressum() {
    const impressum = document.getElementById("impressum-container");
    const gameControls = document.getElementById("game-controls-container");
    impressum.classList.toggle("d-none");
    if (!impressum.classList.contains("d-none")) {
      gameControls.classList.add("d-none");
    }
}
  

function toggleControlInfo() {
    const gameControls = document.getElementById("game-controls-container");
    const impressum = document.getElementById("impressum-container");
    gameControls.classList.toggle("d-none");
    if (!gameControls.classList.contains("d-none")) {
      impressum.classList.add("d-none");
    }
}


function closeWindow() {
    const impressum = document.getElementById("impressum-container");
    const gameControls = document.getElementById("game-controls-container");
    impressum.classList.add("d-none");
    gameControls.classList.add("d-none");
}


function fullscreen() {
    let layers = ['start-overlay', 'start-screen', 'game-over-overlay', 'game-over-screen', 'win-overlay', 'gameCanvas', 'win-screen', 'game-controls-container', 'impressum-container'];
    let container = document.getElementById('absolute-container');
    container.classList.toggle('d-none');

    layers.forEach((layer) => {
        document.getElementById(layer).classList.toggle('fullScreenSize');
    });
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

        case "Escape":
            keyboard.ESC = true;
            if (document.getElementById('absolute-container').classList.contains('d-none')) {
                fullscreen();
            }
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

        case "Escape":
            keyboard.ESC = false;
            break;
    }
});