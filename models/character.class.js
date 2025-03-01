/**
 * Represents the main character in the game, including movement, animation, and
 * interaction logic. Inherits properties and methods from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Character extends MovableObject {

    /**
     * Character properties
     * @type {number}
     */
    height = 120;
    width = 137;
    y = 310;
    x = 1030;
    speed = 6;
    lifePoints = 100;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = 10;
    collisionBoxHeight = 100;
    collisionBoxOffsetX = 38;
    collisionBoxWidth = 60;


    /**
     * Defines animation speeds for various character states in milliseconds.
     * @type {Object}
     * @property {number} idle - Delay for idle animation frames.
     * @property {number} walking - Delay for walking animation frames.
     * @property {number} jumping - Delay for jumping animation frames.
     * @property {number} throw - Delay for throwing animation frames.
     * @property {number} shoot - Delay for shooting animation frames.
     * @property {number} defense - Delay for defense animation frames.
     * @property {number} hurt - Delay for hurt animation frames.
     */
    animationSpeeds = {
        idle: 70,
        walking: 36,
        jumping: 101,
        // throw: 58,
        throw: 36,
        shoot: 33,
        hurt: 99
    };

    /**
     * An array of image paths for the idle animation.
     * @type {string[]}
     */
    IMAGES_IDLE = [
        'img/character/idle/idle-00.png',
        'img/character/idle/idle-01.png',
        'img/character/idle/idle-02.png',
        'img/character/idle/idle-03.png',
        'img/character/idle/idle-04.png',
        'img/character/idle/idle-05.png',
        'img/character/idle/idle-06.png',
        'img/character/idle/idle-07.png',
        'img/character/idle/idle-08.png',
        'img/character/idle/idle-09.png',
        'img/character/idle/idle-10.png',
        'img/character/idle/idle-11.png',
        'img/character/idle/idle-12.png',
        'img/character/idle/idle-13.png',
        'img/character/idle/idle-14.png',
        'img/character/idle/idle-15.png',
        'img/character/idle/idle-16.png',
        'img/character/idle/idle-17.png',
        'img/character/idle/idle-18.png',
        'img/character/idle/idle-19.png',
        'img/character/idle/idle-20.png',
        'img/character/idle/idle-21.png',
        'img/character/idle/idle-22.png',
        'img/character/idle/idle-23.png',
        'img/character/idle/idle-24.png'
    ];

    /**
     * An array of image paths for the walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/character/walk/walk-00.png',
        'img/character/walk/walk-01.png',
        'img/character/walk/walk-02.png',
        'img/character/walk/walk-03.png',
        'img/character/walk/walk-04.png',
        'img/character/walk/walk-05.png',
        'img/character/walk/walk-06.png',
        'img/character/walk/walk-07.png',
        'img/character/walk/walk-08.png',
        'img/character/walk/walk-09.png',
        'img/character/walk/walk-10.png',
        'img/character/walk/walk-11.png',
        'img/character/walk/walk-12.png',
        'img/character/walk/walk-13.png',
        'img/character/walk/walk-14.png',
        'img/character/walk/walk-15.png'
    ];

    /**
     * An array of image paths for the jumping animation.
     * @type {string[]}
     */
    IMAGES_JUMPING = [
        'img/character/jump/jump-00.png',
        'img/character/jump/jump-01.png',
        'img/character/jump/jump-02.png',
        'img/character/jump/jump-03.png',
        'img/character/jump/jump-04.png',
        'img/character/jump/jump-05.png',
        'img/character/jump/jump-06.png',
        'img/character/jump/jump-07.png',
        'img/character/jump/jump-08.png',
        'img/character/jump/jump-09.png',
        'img/character/jump/jump-10.png',
        'img/character/jump/jump-11.png'
    ];

    /**
     * An array of image paths for the throwing animation.
     * @type {string[]}
     */
    IMAGES_THROW = [
        'img/character/throw/throw-00.png',
        'img/character/throw/throw-01.png',
        'img/character/throw/throw-02.png',
        'img/character/throw/throw-03.png',
        'img/character/throw/throw-04.png',
        'img/character/throw/throw-05.png',
        'img/character/throw/throw-06.png',
        'img/character/throw/throw-07.png',
        'img/character/throw/throw-08.png',
        'img/character/throw/throw-09.png'
    ];

    /**
     * An array of image paths for the shooting animation.
     * @type {string[]}
     */
    IMAGES_SHOOT = [
        'img/character/shoot/shoot-00.png',
        'img/character/shoot/shoot-01.png',
        'img/character/shoot/shoot-02.png',
        'img/character/shoot/shoot-03.png',
        'img/character/shoot/shoot-04.png',
        'img/character/shoot/shoot-05.png',
        'img/character/shoot/shoot-06.png',
        'img/character/shoot/shoot-07.png',
        'img/character/shoot/shoot-08.png',
        'img/character/shoot/shoot-09.png'
    ];

    /**
     * An array of image paths for the hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/character/hurt/hurt-00.png',
        'img/character/hurt/hurt-01.png',
        'img/character/hurt/hurt-02.png',
        'img/character/hurt/hurt-03.png',
        'img/character/hurt/hurt-04.png'
    ];

    /**
     * An array of image paths for the death animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/character/die/die-00.png',
        'img/character/die/die-01.png',
        'img/character/die/die-02.png',
        'img/character/die/die-03.png',
        'img/character/die/die-04.png'
    ];


    /**
     * Creates a new Character instance, loads relevant image arrays,
     * applies gravity, and starts the main logic loop.
     * @constructor
     */
    constructor() {
        super().loadImage('img/character/idle/idle-00.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SHOOT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.run();
    }


    /**
     * Initiates the character's main behavior loop, handling controls and animations.
     * @returns {void} No return value.
     */
    run() {
        setStoppableIverval(() => {
            this.characterControls();
            this.characterAnimation();
        }, 1000 / 60);
    }


    /**
     * Makes the character jump by adjusting the vertical speed.
     * @returns {void} No return value.
     */
    characterjump() {
        this.speedY = 17;
    }


    /**
     * Determines if the character can move to the right based on keyboard input,
     * boundary constraints, and the character's life points.
     * @returns {boolean} True if moving right is allowed; false otherwise.
     */
    possibleMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.lifePoints == 0;
    }


    /**
     * Determines if the character can move to the left based on keyboard input,
     * boundary constraints, and the character's life points.
     * @returns {boolean} True if moving left is allowed; false otherwise.
     */
    possibleMoveLeft() {
        return this.world.keyboard.LEFT && this.x > this.world.level.levelStartX && !this.lifePoints == 0;
    }


    /**
     * Determines if the character can jump based on keyboard input, current state,
     * and life points.
     * @returns {boolean} True if jumping is allowed; false otherwise.
     */
    possibleJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround() && !this.lifePoints == 0 && !this.isHurt();
    }


    /**
     * Determines if the character can shoot based on keyboard input, current state,
     * life points, and available pistol ammunition.
     * @returns {boolean} True if shooting is allowed; false otherwise.
     */
    possibleToShoot() {
        return this.world.keyboard.SHOOT && !this.isHurt() && !this.lifePoints == 0 && this.world.collectedPistolAmmunitionBar.collectedPistolAmmunition.length > 0;
    }


    /**
     * Checks input to move left or right, jump, or shoot, and updates camera
     * position accordingly. Also adjusts the orientation for throwing objects.
     * @returns {void} No return value.
     */
    characterControls() {
        if (this.possibleMoveRight()) {
            this.otherDirection = true;
            this.setThrowOtherDirection(false);
            this.moveRight();
        } else if (this.possibleMoveLeft()) {
            this.otherDirection = false;
            this.setThrowOtherDirection(true);
            this.moveLeft();
        }
        if (this.possibleJump()) this.characterjump();
        if (this.possibleToShoot()) this.isCharacterShooting();
        this.world.cameraX = -this.x + 100;
    }


    /**
     * Determines and executes the character's current animation based on
     * whether the character is dead, hurt, jumping, throwing, walking, or shooting.
     * Defaults to the idle animation if none of these conditions are met.
     * @returns {void} No return value.
     */
    characterAnimation() {
        if (this.isDead())     return this.handleDead();
        if (this.isHurt())     return this.handleHurt();
        if (this.isAboveGround()) return this.handleJump();
        if (this.isCharacterThrowing()) return this.handleThrow();
        if (this.isCharacterWalking())  return this.handleWalk();
        if (this.isCharacterShooting()) return this.handleShoot();
        this.handleIdle();
    }


    /**
     * Handles the character's death animation, displays the game over screen,
     * and clears intervals after a short delay. Plays a death sound once.
     * @returns {void} No return value.
     */
    handleDead() {
        this.playAnimationOneTime(this.IMAGES_DEAD);
        setTimeout(() => {
            document.getElementById("game-over-overlay").classList.remove("d-none");
            GAME_SOUND.pause();
            setTimeout(clearAllIntervals, 80);
        }, 2222);
        if (!this.deadSoundPlayed) {
            DIE_SOUND.play();
            WILHELM_SCREAM.play();
            this.deadSoundPlayed = true;
        }
    }


    /**
     * Handles the character's hurt animation, reduces speed, and plays the hurt sound.
     * @returns {void} No return value.
     */
    handleHurt() {
        this.speed = 2;
        this.playsTimedAnimation(this.IMAGES_HURT, 'hurt');
        HURT_SOUND.play();
    }


    /**
     * Handles the character's jump animation, including playing a jump sound once
     * per jump sequence.
     * @returns {void} No return value.
     */
    handleJump() {
        this.playsTimedAnimation(this.IMAGES_JUMPING, 'jumping');
        if (!this.jumpSoundPlayed) {
            JUMP_SOUND.play();
            this.jumpSoundPlayed = true;
            setTimeout(() => this.jumpSoundPlayed = false, 1333);
        }
    }


    /**
     * Handles the character's throw animation.
     * @returns {void} No return value.
     */
    handleThrow() {
        if (this.throwAnimationRunning) return;
        this.throwAnimationRunning = true;
        this.currentImage = 0;
        this.lastFrameTime = Date.now();
    
        const animate = () => {
            this.playsTimedAnimation(this.IMAGES_THROW, 'throw');
            if (this.currentImage < this.IMAGES_THROW.length) {
                requestAnimationFrame(animate);
            } else {
                this.throwAnimationRunning = false;
            }
        };
        requestAnimationFrame(animate);
    }
    
    
    /**
     * Handles the character's walk animation, sets the walking speed, and
     * plays the walk sound.
     * @returns {void} No return value.
     */
    handleWalk() {
        this.speed = 6;
        this.playsTimedAnimation(this.IMAGES_WALKING, 'walking');
        WALK_SOUND.play();
    }


    /**
     * Handles the character's shoot animation.
     * @returns {void} No return value.
     */
    handleShoot() {
        if (this.shootAnimationRunning) return;
        SHOOT_SOUND.play();
        this.shootAnimationRunning = true;
        this.currentImage = 0;
        this.lastFrameTime = Date.now();
        const animate = () => {
            this.playsTimedAnimation(this.IMAGES_SHOOT, 'shoot');
            if (this.currentImage < this.IMAGES_SHOOT.length) {
                requestAnimationFrame(animate);
            } else {
                this.shootAnimationRunning = false;
            }
        };
        requestAnimationFrame(animate);
    }
    

    /**
     * Handles the character's idle animation, which is played if no other actions
     * (like walking, jumping, or shooting) are happening.
     * @returns {void} No return value.
     */
    handleIdle() {
        this.playsTimedAnimation(this.IMAGES_IDLE, 'idle');
    }


    /**
     * Determines if the character is currently walking based on left or right keyboard input.
     * @returns {boolean} True if the character is walking; otherwise false.
     */
    isCharacterWalking() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }


    /**
     * Determines if the character is currently shooting based on keyboard input
     * and the availability of pistol ammunition.
     * @returns {boolean} True if the character is shooting; otherwise false.
     */
    isCharacterShooting() {
        return this.world.keyboard.SHOOT && this.world.collectedPistolAmmunitionBar.collectedPistolAmmunition.length > 0;
    }


    /**
     * Determines if the character is currently throwing a grenade based on keyboard input
     * and the availability of collected grenades.
     * @returns {boolean} True if the character is throwing; otherwise false.
     */
    isCharacterThrowing() {
        return this.world.keyboard.THROW && this.world.collectedGrenadeBar.collectedGrenades.length > 0;
    }
}