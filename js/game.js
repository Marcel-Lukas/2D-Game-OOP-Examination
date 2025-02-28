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


function autoFullscreenForMobile() {
    if (window.matchMedia("(orientation: landscape)").matches) {
      const element = document.documentElement;
  
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        alert("Full screen mode is not supported.");
      }
    }
}
  
  
