let canvas;
let world;
let keyboard = new Keyboard();
let allIntervalsIDs = [];


/**
 * Initializes the game by setting up the level, retrieving the canvas element,
 * and creating a new World instance using the global Keyboard object.
 * 
 * @function init
 * @returns {void} No return value.
 */
function init() {
    initLevel();
    canvas = document.getElementById('gameCanvas');
    world = new World(canvas, keyboard);
}


/**
 * Starts the game by hiding the start overlay and launching the preloaded game
 * flow (loading screen with progress, then the actual game).
 *
 * @function startGame
 * @returns {void} No return value.
 */
function startGame() {
    const startOverlay = document.getElementById("start-overlay");
    startOverlay.classList.add("d-none");
    runWithLoadingScreen();
}


/**
 * Restarts the game by hiding the "Game Over" and "Win" overlays and launching
 * the preloaded game flow again. On a restart the assets are already cached, so
 * the loading screen is practically instant.
 *
 * @function restartGame
 * @returns {void} No return value.
 */
function restartGame() {
    const gameOverOverlay = document.getElementById("game-over-overlay");
    const winScreen = document.getElementById("win-overlay");
    gameOverOverlay.classList.add("d-none");
    winScreen.classList.add("d-none");
    runWithLoadingScreen();
}


/**
 * Shows the loading screen, preloads every image and audio asset in parallel
 * while updating the progress bar, and only then initializes and reveals the
 * game. If the preloader is unavailable for any reason, it falls back to the
 * original immediate-start behaviour so the game always remains playable.
 *
 * @function runWithLoadingScreen
 * @returns {void} No return value.
 */
function runWithLoadingScreen() {
    if (typeof preloadAllAssets !== 'function') {
        init();
        setTimeout(() => { GAME_SOUND.play(); }, 444);
        return;
    }
    showLoadingScreen();
    preloadAllAssets(updateLoadingProgress).then(() => {
        hideLoadingScreen();
        init();
        setTimeout(() => { GAME_SOUND.play(); }, 200);
    });
}


/**
 * Reveals the loading overlay and resets its progress to 0%.
 *
 * @function showLoadingScreen
 * @returns {void} No return value.
 */
function showLoadingScreen() {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
        updateLoadingProgress(0);
        overlay.classList.remove("d-none");
    }
}


/**
 * Hides the loading overlay.
 *
 * @function hideLoadingScreen
 * @returns {void} No return value.
 */
function hideLoadingScreen() {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
        overlay.classList.add("d-none");
    }
}


/**
 * Updates the loading screen's progress bar and percentage text.
 *
 * @function updateLoadingProgress
 * @param {number} percent - The loading progress as a value between 0 and 100.
 * @returns {void} No return value.
 */
function updateLoadingProgress(percent) {
    const fill = document.getElementById("loading-bar-fill");
    const text = document.getElementById("loading-text");
    if (fill) fill.style.width = percent + "%";
    if (text) text.textContent = "Loading… " + percent + "%";
}


/**
 * Sets a stoppable interval and stores its ID in the global array of interval IDs.
 * 
 * @function setStoppableIverval
 * @param {Function} fn - The callback function to be executed repeatedly.
 * @param {number} time - The delay in milliseconds for the interval.
 * @returns {void} No return value.
 */
function setStoppableIverval(fn, time) {
    let id = setInterval(fn, time);
    allIntervalsIDs.push(id);
}


/**
 * Clears all intervals that were previously set with setStoppableIverval and
 * empties the global array of interval IDs.
 * 
 * @function clearAllIntervals
 * @returns {void} No return value.
 */
function clearAllIntervals() {
    allIntervalsIDs.forEach(clearInterval);
    allIntervalsIDs.length = 0;
}


/**
 * Toggles the visibility of the impressum container. If the impressum is shown,
 * the game controls container is hidden.
 * 
 * @function toggleImpressum
 * @returns {void} No return value.
 */
function toggleImpressum() {
    const impressum = document.getElementById("impressum-container");
    const gameControls = document.getElementById("game-controls-container");
    impressum.classList.toggle("d-none");
    if (!impressum.classList.contains("d-none")) {
      gameControls.classList.add("d-none");
    }
}


/**
 * Toggles the visibility of the game controls container. If the game controls
 * container is shown, the impressum container is hidden.
 * 
 * @function toggleControlInfo
 * @returns {void} No return value.
 */
function toggleControlInfo() {
    const gameControls = document.getElementById("game-controls-container");
    const impressum = document.getElementById("impressum-container");
    gameControls.classList.toggle("d-none");
    if (!gameControls.classList.contains("d-none")) {
      impressum.classList.add("d-none");
    }
}


/**
 * Closes both the impressum and game controls containers by adding the "d-none"
 * class to each of them.
 * 
 * @function closeWindow
 * @returns {void} No return value.
 */
function closeWindow() {
    const impressum = document.getElementById("impressum-container");
    const gameControls = document.getElementById("game-controls-container");
    impressum.classList.add("d-none");
    gameControls.classList.add("d-none");
}


/**
 * Toggles fullscreen mode by toggling the "d-none" class on the absolute
 * container and the "fullScreenSize" class on a predefined set of layers.
 * 
 * @function fullscreen
 * @returns {void} No return value.
 */
function fullscreen() {
    let layers = ['start-overlay', 'start-screen', 'game-over-overlay', 'game-over-screen', 
    'win-overlay', 'gameCanvas', 'win-screen', 'game-controls-container', 'impressum-container'];
    let container = document.getElementById('absolute-container');
    container.classList.toggle('d-none');

    layers.forEach((layer) => {
        document.getElementById(layer).classList.toggle('fullScreenSize');
    });
}


/**
 * Attempts to activate fullscreen mode on mobile devices when the orientation
 * is in landscape. It checks various fullscreen request methods for different
 * browsers.
 * 
 * @function autoFullscreenForMobile
 * @returns {void} No return value.
 */
function autoFullscreenForMobile() {
    if (
      window.matchMedia("(orientation: landscape)").matches &&
      (window.innerWidth <= 728 || window.innerHeight <= 728)
    ) {
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
  
