let isMuted = false;

/**
 * Sound effects for character.
 * 
 * @type {HTMLAudioElement}
 */
const WALK_SOUND = new Audio('audio/walk.mp3');
WALK_SOUND.volume = 0.15;

const JUMP_SOUND = new Audio('audio/jump.mp3');
JUMP_SOUND.volume = 0.4;

const THROW_SOUND = new Audio('audio/throw.mp3');
THROW_SOUND.volume = 0.5;

const HURT_SOUND = new Audio('audio/hurt.mp3');
HURT_SOUND.volume = 0.7;

const DIE_SOUND = new Audio('audio/dieSound.mp3');
DIE_SOUND.volume = 0.7;

const WILHELM_SCREAM = new Audio('audio/dieWilhelmScream.mp3');
WILHELM_SCREAM.volume = 0.7;


/**
 * Sound effects for weapons.
 * 
 * @type {HTMLAudioElement}
 */
const SHOOT_SOUND = new Audio('audio/shoot.mp3');
SHOOT_SOUND.volume = 0.5;

const EXPLOSION_SOUND = new Audio('audio/grenade-explosion.mp3');
EXPLOSION_SOUND.volume = 0.5;


/**
 * Sound effects for collectable items.
 * 
 * @type {HTMLAudioElement}
 */
const PICK_UP_PISTOL_AMMO_SOUND = new Audio('audio/pick-pistol-ammo.mp3');
PICK_UP_PISTOL_AMMO_SOUND.volume = 0.3;

const PICK_UP_NADE_AMMO_SOUND = new Audio('audio/pick-nade-ammo.mp3');
PICK_UP_NADE_AMMO_SOUND.volume = 0.6;

const PICK_UP_HEALTH_SOUND = new Audio('audio/collect.mp3');
PICK_UP_HEALTH_SOUND.volume = 0.5;


/**
 * Sound effects for alien enemies.
 * 
 * @type {HTMLAudioElement}
 */
const ALIEN_HURT_SOUND = new Audio('audio/alien-hurt-Sound.mp3');
ALIEN_HURT_SOUND.volume = 0.2;

const JUMP_ALIEN_HIT = new Audio('audio/sci-fi-notification.mp3');
JUMP_ALIEN_HIT.volume = 0.4;


/**
 * Sound effects for endboss alien.
 * 
 * @type {HTMLAudioElement}
 */
const BOSS_ALERT_SOUND = new Audio('audio/alien-alert.mp3');
BOSS_ALERT_SOUND.volume = 0.5;

const BOSS_DASH_SOUND = new Audio('audio/dashSound.mp3');
BOSS_DASH_SOUND.volume = 0.25;

const BOSS_WALK_SOUND = new Audio('audio/boss-footstep.mp3');
BOSS_WALK_SOUND.volume = 0.18;

const BOSS_SCREAM = new Audio('audio/bossWinSound.mp3');
BOSS_SCREAM.volume = 0.6;


/**
 * Background music from the game.
 * 
 * @type {HTMLAudioElement}
 */
const GAME_SOUND = new Audio('audio/gameSound.mp3');
GAME_SOUND.volume = 0.12;



function setAllSoundsMuted(muted) {
    WALK_SOUND.muted = muted;
    JUMP_SOUND.muted = muted;
    THROW_SOUND.muted = muted;
    HURT_SOUND.muted = muted;
    DIE_SOUND.muted = muted;
    WILHELM_SCREAM.muted = muted;

    SHOOT_SOUND.muted = muted;
    EXPLOSION_SOUND.muted = muted;

    PICK_UP_PISTOL_AMMO_SOUND.muted = muted;
    PICK_UP_NADE_AMMO_SOUND.muted = muted;
    PICK_UP_HEALTH_SOUND.muted = muted;
    
    ALIEN_HURT_SOUND.muted = muted;
    JUMP_ALIEN_HIT.muted = muted;

    BOSS_ALERT_SOUND.muted = muted;
    BOSS_DASH_SOUND.muted = muted;
    BOSS_WALK_SOUND.muted = muted;
    BOSS_SCREAM.muted = muted;

    GAME_SOUND.muted = muted;
}


function muteSound() {
    setAllSoundsMuted(true);
    localStorage.setItem('isSoundMuted', 'true');
}


function playSound() {
    setAllSoundsMuted(false);
    localStorage.setItem('isSoundMuted', 'false');
}


function loadSoundStatus() {
    const storageValue = localStorage.getItem('isSoundMuted');
    if (storageValue === 'true') {
        isMuted = true;
        setAllSoundsMuted(true);
    } else {
        isMuted = false;
        setAllSoundsMuted(false);
    }
    changeMuteIcon();
}


function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        muteSound();
    } else {
        playSound();
    }
    changeMuteIcon();
}


function changeMuteIcon() {
    const storageValue = localStorage.getItem('isSoundMuted');
    const soundIcon = document.getElementById('sound-switch');
    if (storageValue === 'true') {
        soundIcon.src = 'img/mute-icon.png';
    } else {
        soundIcon.src = 'img/sound-icon.png';
    }
}


window.addEventListener('DOMContentLoaded', loadSoundStatus);
