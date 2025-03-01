/**
 * Represents a health pickup in the game world, including its appearance,
 * hitbox properties, and animation behavior. Inherits from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Health extends MovableObject {


    /**
     * Properties of health pickup sprite
     * @type {number}
     */
    height = 48;
    width = 42;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = -3;
    collisionBoxOffsetX = -6;
    collisionBoxWidth = 54;
    collisionBoxHeight = 54;


    /**
     * An array of image paths for the health animation.
     * @type {string[]}
     */
    IMAGES = [
        'img/health/heart-00.png',
        'img/health/heart-01.png'
    ];


    /**
     * Creates a new Health instance, loads the default image and animation frames,
     * sets its position, and starts its animation loop.
     *
     * @constructor
     * @param {number} x - The x-coordinate for the health pickup on the canvas.
     * @param {number} y - The y-coordinate for the health pickup on the canvas.
     */
    constructor(x, y) {
        super().loadImage('img/health/heart-00.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }


    /**
     * Starts the animation loop for the health pickup, switching between its available images.
     *
     * @returns {void} No return value.
     */
    animate() {
        setStoppableIverval(() => {
            this.playAnimation(this.IMAGES);
        }, 333);
    }

    
}