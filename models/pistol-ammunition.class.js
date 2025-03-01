/**
 * Represents pistol ammunition in the game world, including its appearance, 
 * hitbox properties, and animation. Inherits from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class PistolAmmunition extends MovableObject {

    /**
     * Properties of the pistol ammunition sprite.
     * @type {number}
     */
    height = 48;
    width = 48;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = -3;
    collisionBoxOffsetX = -3;
    collisionBoxWidth = 54;
    collisionBoxHeight = 54;


    /**
     * An array of image paths for the pistol ammunition's animation frames.
     * @type {string[]}
     */
    IMAGES = [
        'img/pistol/pistol-ammunition-00.png',
        'img/pistol/pistol-ammunition-01.png',
        'img/pistol/pistol-ammunition-02.png',
        'img/pistol/pistol-ammunition-03.png',
        'img/pistol/pistol-ammunition-04.png',
        'img/pistol/pistol-ammunition-05.png',
        'img/pistol/pistol-ammunition-06.png',
        'img/pistol/pistol-ammunition-07.png',
        'img/pistol/pistol-ammunition-08.png',
        'img/pistol/pistol-ammunition-09.png'
    ];


    /**
     * Creates a new PistolAmmunition instance at the specified coordinates,
     * loads its default image and animation frames, and starts its animation.
     *
     * @constructor
     * @param {number} x - The x-coordinate of the pistol ammunition on the canvas.
     * @param {number} y - The y-coordinate of the pistol ammunition on the canvas.
     */
    constructor(x, y) {
        super().loadImage('img/pistol/pistol-ammunition-00.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }


    /**
     * Initiates the animation loop for the pistol ammunition, cycling through
     * its images at a fixed interval.
     *
     * @function animate
     * @returns {void} No return value.
     */
    animate() {
        setStoppableIverval(() => {
            this.playAnimation(this.IMAGES);
        }, 120);
    }


}
