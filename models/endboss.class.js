/**
 * Represents the final boss in the game, including all of its animations, movement,
 * and interaction logic. Inherits properties and methods from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Endboss extends MovableObject {

    
    /**
     * A reference to the game world.
     * @type {World}
     */
    world;


    /**
     * Endboss properties
     * @type {number}
     */
    height = 320;
    width = 280;
    y = 130;
    lifePoints = 2000;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = 46;
    collisionBoxHeight = 250;
    collisionBoxOffsetX = 80;
    collisionBoxWidth = 120;


    /**
     * Defines animation speeds in milliseconds for various endboss states.
     * @type {Object}
     * @property {number} idle - Delay for idle animation frames.
     * @property {number} walking - Delay for walking animation frames.
     * @property {number} dash - Delay for dash animation frames.
     * @property {number} hurt - Delay for hurt animation frames.
     * @property {number} whacked - Delay for whacked animation frames.
     * @property {number} alert - Delay for alert animation frames.
     */
    animationSpeeds = {
        idle: 96,
        walking: 160,
        dash: 111,
        hurt: 111,
        whacked: 60,
        alert: 133
    };


    /**
     * Indicates whether the player character has encountered the boss for the first time,
     * triggering the initial boss awakening sequence.
     * @type {boolean}
     * @default false
     */
    hadBossFirstContact = false;


    /**
     * An array of image paths for the idle animation.
     * @type {string[]}
     */
    IMAGES_IDLE = [
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_000.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_001.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_002.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_003.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_004.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_005.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_006.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_007.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_008.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_009.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_010.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_011.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_012.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_013.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_014.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_015.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_016.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_017.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_018.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_019.png'
    ];


    /**
     * An array of image paths for the walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_000.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_001.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_002.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_003.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_004.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_005.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_006.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_007.png'
    ];


    /**
     * An array of image paths for the dash animation.
     * @type {string[]}
     */
    IMAGES_DASH = [
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_000.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_001.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_002.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_003.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_004.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_005.png'
    ];


    /**
     * An array of image paths for the hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_000.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_001.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_002.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_003.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_004.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_005.png'
    ];


    /**
     * An array of image paths for the whacked animation.
     * @type {string[]}
     */
    IMAGES_WHACKED = [
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_000.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_001.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_002.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_003.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_004.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_005.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_006.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_007.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_008.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_009.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_010.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_011.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_012.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_013.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_014.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_015.png'
    ];


    /**
     * An array of image paths for the dying animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/endboss/die/__grey_alien_black_jump_suit_die_000.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_001.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_002.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_003.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_004.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_005.png'
    ];


    /**
     * An array of image paths for the alert animation.
     * @type {string[]}
     */
    IMAGES_ALERT = [
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_000.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_001.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_002.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_008.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_009.png'
    ];


    /**
     * Creates a new Endboss instance, loads its default sprite and all relevant animations,
     * sets its position and speed, and initiates its main behavior loop.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the endboss on the canvas.
     */
    constructor(x) {
        super().loadImage('img/endboss/idle/__grey_alien_black_jump_suit_idle_006.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DASH);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WHACKED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ALERT);
        this.x = x;
        this.speed = 0.26;
        this.run();
    }


    /**
     * Starts the endboss's main behavior loop, which triggers its animations
     * at a fixed interval.
     *
     * @returns {void} No return value.
     */
    run() {
        setStoppableIverval(() => {
            this.bossAnimation();
        }, 1000 / 60);
    }


    /**
     * Handles the endboss's core animation logic based on character position
     * and the endboss's current state (e.g., first contact, hurt, dead).
     *
     * @returns {void} No return value.
     */
    bossAnimation() {
        if (world.character.x > 5000 && !this.hadBossFirstContact) {
            this.awakenedBossActions();
            this.hadBossFirstContact = true;
        } else if (this.isHurt()) {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_HURT, 'hurt');
        } else if (this.isDead()) {
            this.speed = 0;
            this.playAnimationOneTime(this.IMAGES_DEAD);
            setTimeout(() => {
                document.getElementById("win-overlay").classList.remove("d-none");
                GAME_SOUND.pause();
                WIN_SOUND.play();
                setTimeout(clearAllIntervals, 80);
            }, 2400);
        }
    }


    /**
     * Awakens the boss, initiating phases such as "alert", "dash",
     * and "walking". Each phase handles different animations and movements.
     *
     * @returns {void} No return value.
     */
    awakenedBossActions() {
        let i = 0;
        let dashCount = 0;
        let phase = "alert";
        setStoppableIverval(() => {
            phase = this.handlePhase(phase, i, dashCount);
            if (phase === "dash") dashCount++;
            i++;
        }, 1000 / 60);
    }


    /**
     * Orchestrates which phase should run based on the current phase, a counter,
     * and how many times the boss has dashed.
     *
     * @param {string} phase - The current phase of the boss ("alert", "dash", or "walking").
     * @param {number} i - A counter that increments over time.
     * @param {number} dashCount - The number of dash actions performed.
     * @returns {string} The updated phase.
     */
    handlePhase(phase, i, dashCount) {
        if (phase === "alert") return this.handleAlertPhase(i);
        if (phase === "dash") return this.handleDashPhase(dashCount);
        return this.handleWalkingPhase();
    }


    /**
     * Manages the "alert" phase, during which the boss plays its alert animation and sound.
     * After a set time, transitions to the "dash" phase.
     *
     * @param {number} i - A counter that increments to determine how long the alert phase lasts.
     * @returns {string} The next phase, either "alert" or "dash".
     */
    handleAlertPhase(i) {
        if (i < 99) {
            this.playsTimedAnimation(this.IMAGES_ALERT, "alert");
            BOSS_ALERT_SOUND.play();
            return "alert";
        }
        return "dash";
    }


    /**
     * Manages the "dash" phase, during which the boss moves quickly to the left
     * and performs a dash animation. After a certain count, transitions to the
     * "walking" phase.
     *
     * @param {number} dashCount - The number of dashes performed so far.
     * @returns {string} The next phase, either "dash" or "walking".
     */
    handleDashPhase(dashCount) {
        if (dashCount < 144) {
            this.playsTimedAnimation(this.IMAGES_DASH, "dash");
            BOSS_DASH_SOUND.play();
            this.moveLeft();
            this.speed = 3;
            return "dash";
        }
        return "walking";
    }


    /**
     * Manages the "walking" phase, where the boss moves left or right toward the character
     * if the character is within range. Plays walking animations and sounds if the boss
     * is alive and the character is not dead.
     *
     * @returns {string} Always returns "walking".
     */
    handleWalkingPhase() {
        if (Math.abs(world.character.x - this.x) <= 666) {
            this.walkPhaseMovement();
            this.walkPhaseAnimation();
        }
        return "walking";
    }


    /**
     * Determines the boss's horizontal movement based on the character's position.
     * If the character is still alive, the boss moves toward the character;
     * otherwise, the boss remains idle.
     *
     * @returns {void} No return value.
     */
    walkPhaseMovement() {
        if (world.character.x < this.x) {
            this.walkLeftMovement();
        } else if (world.character.x - 100 > this.x) {
            this.walkRightMovement();
        }
    }


    /**
     * Moves the boss to the left at speed 1 if the character is alive. Otherwise, the boss stays idle.
     *
     * @returns {void} No return value.
     */
    walkLeftMovement() {
        if (world.character.lifePoints > 0) {
            this.otherDirection = true;
            this.moveLeft();
            this.speed = 1;
        } else {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_IDLE, "idle");
        }
    }


    /**
     * Moves the boss to the right at speed 1 if the character is alive. Otherwise, the boss stays idle.
     *
     * @returns {void} No return value.
     */
    walkRightMovement() {
        if (world.character.lifePoints > 0) {
            this.otherDirection = false;
            this.moveRight();
            this.speed = 1;
        } else {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_IDLE, "idle");
        }
    }


    /**
     * Plays walking animations if the boss is alive, and triggers sounds. If the character is dead,
     * the boss plays its idle animation and may perform a victory scream.
     *
     * @returns {void} No return value.
     */
    walkPhaseAnimation() {
        if (!this.isDead()) {
            this.playsTimedAnimation(this.IMAGES_WALKING, "walking");
        }
        if (!this.isDead() && !world.character.isDead()) {
            BOSS_WALK_SOUND.play();
        }
        if (world.character.isDead()) {
            this.playsTimedAnimation(this.IMAGES_IDLE, "idle");
            if (!this.bossScreamSoundPlayed) {
                setTimeout(() => {
                    BOSS_SCREAM.play();
                    this.bossScreamSoundPlayed = true;
                }, 888);
            }
        }
    }


}
