/**
 * Represents a brain alien enemy in the game, including its sprite animations,
 * hitbox properties, and movement logic. Inherits properties and methods from
 * {@link MovableObject}.
 *
 * @extends MovableObject
 */
class BrainAlien extends MovableObject {

    /**
     * Big Brain Alien properties
     * @type {number}
     */
    height = 190;
    width = 146;
    y = 246;
    lifePoints = 300;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = 25;
    collisionBoxHeight = 150;
    collisionBoxOffsetX = 32;
    collisionBoxWidth = 70;


    /**
     * Defines animation speeds for the brain alien.
     * @type {Object}
     * @property {number} walking - Delay in milliseconds for the walking animation.
     * @property {number} hurt - Delay in milliseconds for the hurt animation.
     */
    animationSpeeds = {
        walking: 180,
        hurt: 160
    };


    /**
     * An array of image paths for the walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/brain-alien/walk/__green_alien_walk_000.png',
        'img/brain-alien/walk/__green_alien_walk_001.png',
        'img/brain-alien/walk/__green_alien_walk_002.png',
        'img/brain-alien/walk/__green_alien_walk_003.png',
        'img/brain-alien/walk/__green_alien_walk_004.png',
        'img/brain-alien/walk/__green_alien_walk_005.png',
        'img/brain-alien/walk/__green_alien_walk_006.png',
        'img/brain-alien/walk/__green_alien_walk_007.png'
    ];


    /**
     * An array of image paths for the hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/brain-alien/hurt/__green_alien_hurt_000.png',
        'img/brain-alien/hurt/__green_alien_hurt_001.png',
        'img/brain-alien/hurt/__green_alien_hurt_002.png',
        'img/brain-alien/hurt/__green_alien_hurt_003.png',
        'img/brain-alien/hurt/__green_alien_hurt_004.png',
        'img/brain-alien/hurt/__green_alien_hurt_005.png'
    ];


    /**
     * An array of image paths for the death animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/brain-alien/die/__green_alien_die_000.png',
        'img/brain-alien/die/__green_alien_die_001.png',
        'img/brain-alien/die/__green_alien_die_002.png',
        'img/brain-alien/die/__green_alien_die_003.png',
        'img/brain-alien/die/__green_alien_die_004.png',
        'img/brain-alien/die/__green_alien_die_005.png'
    ];


    /**
     * Creates a new BrainAlien instance. Loads the initial image and animation frames,
     * sets the x-coordinate, movement speed, and starts the alien's behavior loop.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the brain alien.
     */
    constructor(x) {
        super().loadImage('img/brain-alien/walk/__green_alien_walk_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = 0.20;
        this.run();
    }

    
    /**
     * Starts the brain alien's main behavior loop. This method sets up two intervals:
     * one for updating the alien's animation and one for moving the alien to the left.
     * If the alien moves off the left side of the level, its x-coordinate resets to the right.
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
     * Controls the brain alien's animations based on its current state.
     * If the alien is dead, it stops moving and plays the death animation once.
     * If the alien is hurt, it stops moving and plays a timed hurt animation.
     * Otherwise, it resumes its normal walking animation after a brief delay.
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
