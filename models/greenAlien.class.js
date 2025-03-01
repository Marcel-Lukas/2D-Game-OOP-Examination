/**
 * Represents a green alien enemy in the game, including its animations,
 * movement, hitbox properties, and health. Inherits properties and methods
 * from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class GreenAlien extends MovableObject {

    
    /**
     * GreenAlien properties
     * @type {number}
     */
    height = 144;
    width = 116;
    y = 288;
    lifePoints = 100;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = 25;
    collisionBoxHeight = 110;
    collisionBoxOffsetX = 15;
    collisionBoxWidth = 70;


    /**
     * An array of image paths for the walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_000.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_001.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_002.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_003.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_004.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_005.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_006.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_007.png'
    ];


    /**
     * An array of image paths for the hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_001.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_002.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_003.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_004.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_005.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_006.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_007.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_008.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_009.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_010.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_011.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_012.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_013.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_014.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_015.png'
    ];


    /**
     * An array of image paths for the dying animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/alien-green/die/__friendly_alien_green_skin_die_000.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_001.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_002.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_003.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_004.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_005.png'
    ];


    /**
     * Contains animation speeds in milliseconds for the green alien's walking and hurt states.
     * @type {Object}
     * @property {number} walking - The delay for walking animation frames.
     * @property {number} hurt - The delay for hurt animation frames.
     */
    animationSpeeds = {
        walking: 180,
        hurt: 80
    };


    /**
     * Creates a new GreenAlien instance at the specified x-coordinate, loads its default image
     * and animation frames, sets its movement speed, and starts its main behavior loop.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the green alien.
     */
    constructor(x) {
        super().loadImage('img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_001.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = 0.20;
        this.run();
    }


    /**
     * Begins the green alien's main behavior loop, managing its animation
     * and leftward movement. If the alien moves past a boundary, it resets
     * to the far right edge of the level.
     *
     * @returns {void} No return value.
     */
    run() {
        setStoppableIverval(() => {
            this.alienAnimation();
        }, 1000 / 60);

        setStoppableIverval(() => {
            this.moveLeft();
            if (this.x < level1.levelStartX - 555) {
                this.x = level1.levelEndX + 400;
            }
        }, 1000 / 60);
    }


    /**
     * Determines the green alien's current state (dead, hurt, or walking),
     * plays the appropriate animation, and adjusts its speed accordingly.
     *
     * @returns {void} No return value.
     */
    alienAnimation() {
        if (this.isDead()) {
            this.speed = 0;
            this.playAnimationOneTime(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_HURT, 'hurt');
        } else {
            setTimeout(() => {
                this.speed = 0.20;
                this.playsTimedAnimation(this.IMAGES_WALKING, 'walking');
            }, 77);
        }
    }



}
