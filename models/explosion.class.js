/**
 * Represents an explosion effect, including its hitbox properties, animations,
 * and timed detonation sequence. Inherits properties and methods from
 * {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Explosion extends MovableObject {


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = -50;
    collisionBoxHeight = 250;
    collisionBoxOffsetX = 55;
    collisionBoxWidth = 160;


    /**
     * An array of image paths for the explosion animation frames.
     * @type {string[]}
     */
    IMAGES_EXPLOSION = [
        'img/explosion/explosion-00.png',
        'img/explosion/explosion-01.png',
        'img/explosion/explosion-02.png',
        'img/explosion/explosion-03.png',
        'img/explosion/explosion-04.png',
        'img/explosion/explosion-05.png',
        'img/explosion/explosion-06.png',
        'img/explosion/explosion-07.png',
        'img/explosion/explosion-08.png',
        'img/explosion/explosion-09.png',
        'img/explosion/explosion-10.png'
    ];


    /**
     * Defines the animation speeds for the explosion.
     * @type {Object}
     * @property {number} detonationSpeed - The delay in milliseconds between frames of the detonation animation.
     */
    animationSpeeds = {
        detonationSpeed: 70,
    };


    /**
     * Creates a new Explosion instance at the specified x-coordinate, loads its
     * default image and the complete explosion frames, sets its position and size,
     * and initiates the detonation animation.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the explosion.
     */
    constructor(x) {
        super().loadImage('img/explosion/explosion-05.png');
        this.loadImages(this.IMAGES_EXPLOSION);
        this.width = 270;
        this.height = 210;
        this.x = x;
        this.y = 240;
        this.explode();
    }


    /**
     * Initiates the explosion animation at a fixed interval, cycling through
     * the explosion image frames based on the defined {@link animationSpeeds}.
     *
     * @function explode
     * @returns {void} No return value.
     */
    explode() {
        setStoppableIverval(() => {
            this.playsTimedAnimation(this.IMAGES_EXPLOSION, 'detonationSpeed');
        }, 1000 / 60);
    }


}
