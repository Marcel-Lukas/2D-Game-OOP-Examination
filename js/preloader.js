/**
 * @file preloader.js
 * Provides a non-invasive asset preloading layer for the game. It loads all
 * images (into the shared image cache of {@link DrawableObject}) and audio files
 * in parallel, while reporting progress to a loading screen. The game only starts
 * once everything is ready, which removes the "pop-in" of missing graphics and
 * greatly improves the experience on slow / throttled connections.
 *
 * The module is intentionally additive: it does not change any game logic. It
 * collects asset paths automatically from the existing data structures, so no
 * separate, hard-to-maintain list of paths has to be kept in sync.
 */


/**
 * Collects every unique image path that the game uses. Paths are gathered from
 * three sources:
 *  1. The shared image cache (already populated when the world is built).
 *  2. The `IMAGES*` arrays declared on the model classes (animation frames).
 *  3. A small list of static UI images referenced directly in the HTML.
 *
 * @function collectImagePaths
 * @returns {string[]} A de-duplicated array of image paths.
 */
function collectImagePaths() {
    const paths = new Set();
    addSharedCachePaths(paths);
    addClassImagePaths(paths);
    addStaticUiImagePaths(paths);
    return Array.from(paths);
}


/**
 * Adds all paths that are already present in the shared image cache.
 *
 * @function addSharedCachePaths
 * @param {Set<string>} paths - The set that collects the paths.
 * @returns {void} No return value.
 */
function addSharedCachePaths(paths) {
    if (typeof DrawableObject !== 'undefined' && DrawableObject.sharedImageCache) {
        Object.keys(DrawableObject.sharedImageCache).forEach((p) => paths.add(p));
    }
}


/**
 * Scans the known model classes for `IMAGES*` arrays and adds their paths.
 * This works without instantiating the classes by reading the field defaults
 * from a single throwaway instance created in a safe, side-effect-free way.
 *
 * @function addClassImagePaths
 * @param {Set<string>} paths - The set that collects the paths.
 * @returns {void} No return value.
 */
function addClassImagePaths(paths) {
    IMAGE_PATH_ARRAYS.forEach((arr) => {
        if (Array.isArray(arr)) {
            arr.forEach((p) => paths.add(p));
        }
    });
}


/**
 * Adds the static UI / screen images that are referenced directly in index.html
 * (start, win and game-over screens, icons, mobile buttons, etc.) as well as the
 * level background, cloud and pickup images referenced from the level data.
 *
 * @function addStaticUiImagePaths
 * @param {Set<string>} paths - The set that collects the paths.
 * @returns {void} No return value.
 */
function addStaticUiImagePaths(paths) {
    STATIC_UI_IMAGES.forEach((p) => paths.add(p));
    LEVEL_IMAGES.forEach((p) => paths.add(p));
}


/**
 * Static UI images referenced from the HTML markup. These are not part of any
 * model class, so they are listed explicitly to be preloaded as well.
 * @type {string[]}
 */
const STATIC_UI_IMAGES = [
    'img/start-screen.webp',
    'img/end-screen.webp',
    'img/win-screen.webp',
    'img/sound-icon.png',
    'img/mute-icon.png',
    'img/fullscreen-icon.png',
    'img/keyboard.png',
    'img/close-white.png',
    'img/left.png',
    'img/right.png',
    'img/up.png',
    'img/gun.png',
    'img/grenade/grenade-00.png'
];


/**
 * Level background, cloud, UFO and pickup images referenced from the level data
 * (levels/level1.js). These are not part of the `IMAGES*` animation arrays, so
 * they are listed here to ensure the world is fully painted from the first frame.
 * @type {string[]}
 */
const LEVEL_IMAGES = [
    'img/alien-green/ufo.png',
    'img/background/1_first_layer/1.png',
    'img/background/1_first_layer/2.png',
    'img/background/2_second_layer/1.png',
    'img/background/2_second_layer/2.png',
    'img/background/3_third_layer/1.png',
    'img/background/3_third_layer/2.png',
    'img/background/4_clouds/1.png',
    'img/background/4_clouds/2.png',
    'img/background/air.png',
    'img/grenade/grenade-00.png'
];


/**
 * Loads a single image and resolves once it is fully loaded (or fails). Reuses
 * the shared cache so each image is only ever requested once.
 *
 * @function preloadImage
 * @param {string} path - The image path to load.
 * @returns {Promise<void>} Resolves when the image has loaded or errored.
 */
function preloadImage(path) {
    return new Promise((resolve) => {
        const cache = DrawableObject.sharedImageCache;
        let img = cache[path];
        if (!img) {
            img = new Image();
            img.src = path;
            cache[path] = img;
        }
        if (img.complete) {
            resolve();
            return;
        }
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
    });
}


/**
 * Loads a single audio file far enough to be played without stalling and
 * resolves once it is ready (or fails / times out). A timeout guards against
 * connections where the `canplaythrough` event never fires.
 *
 * @function preloadAudio
 * @param {HTMLAudioElement} audio - The audio element to prepare.
 * @returns {Promise<void>} Resolves when the audio is ready, errors, or times out.
 */
function preloadAudio(audio) {
    return new Promise((resolve) => {
        if (!audio) {
            resolve();
            return;
        }
        let settled = false;
        const done = () => { if (!settled) { settled = true; resolve(); } };
        if (audio.readyState >= 3) { done(); return; }
        audio.addEventListener('canplaythrough', done, { once: true });
        audio.addEventListener('error', done, { once: true });
        audio.preload = 'auto';
        audio.load();
        setTimeout(done, 8000);
    });
}


/**
 * Runs the full preload sequence: collects all assets, loads them in parallel
 * while updating the progress callback, and resolves when everything is ready.
 *
 * @function preloadAllAssets
 * @param {function(number): void} [onProgress] - Called with a value 0..100.
 * @returns {Promise<void>} Resolves once all assets have been processed.
 */
async function preloadAllAssets(onProgress) {
    const imagePaths = collectImagePaths();
    const audios = collectAudioElements();
    const total = imagePaths.length + audios.length;
    let loaded = 0;
    const report = () => {
        loaded++;
        if (typeof onProgress === 'function') {
            onProgress(Math.round((loaded / Math.max(total, 1)) * 100));
        }
    };
    const tasks = [
        ...imagePaths.map((p) => preloadImage(p).then(report)),
        ...audios.map((a) => preloadAudio(a).then(report))
    ];
    if (typeof onProgress === 'function') onProgress(0);
    await Promise.all(tasks);
    if (typeof onProgress === 'function') onProgress(100);
}


/**
 * Collects all global `Audio` elements declared in sounds.js. Missing globals
 * are skipped gracefully so the preloader keeps working if a sound is removed.
 *
 * @function collectAudioElements
 * @returns {HTMLAudioElement[]} The available audio elements.
 */
function collectAudioElements() {
    const names = [
        'WALK_SOUND', 'JUMP_SOUND', 'THROW_SOUND', 'HURT_SOUND', 'DIE_SOUND',
        'WILHELM_SCREAM', 'SHOOT_SOUND', 'EXPLOSION_SOUND', 'PICK_UP_PISTOL_AMMO_SOUND',
        'PICK_UP_NADE_AMMO_SOUND', 'PICK_UP_HEALTH_SOUND', 'ALIEN_HURT_SOUND',
        'JUMP_ALIEN_HIT', 'BOSS_ALERT_SOUND', 'BOSS_DASH_SOUND', 'BOSS_WALK_SOUND',
        'BOSS_SCREAM', 'GAME_SOUND', 'WIN_SOUND'
    ];
    return names
        .map((name) => (typeof window !== 'undefined' ? window[name] : undefined))
        .filter((audio) => audio instanceof Audio);
}
