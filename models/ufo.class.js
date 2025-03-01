/**
 * Represents a UFO object in the game that moves horizontally and floats vertically.
 * Inherits properties and methods from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Ufo extends MovableObject {

    /**
     * UFO properties
     * @type {number}
     */
    y = 90;
    height = 50;
    width = 120;

    
    /**
     * The offset used for the vertical floating animation.
     * @type {number}
     * @default 0
     */
    floatOffset = 0;


    /**
     * Creates a new UFO instance, loads its image from the provided path,
     * sets its initial x-coordinate, assigns a random speed, and starts its animation.
     *
     * @constructor
     * @param {string} imagePath - The path to the UFO image.
     * @param {number} x - The initial x-coordinate of the UFO.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.setRandomSpeed();
        this.animate();
    }


    /**
     * Sets a random horizontal speed for the UFO.
     * The speed is assigned a negative value between -8 and -15.
     *
     * @function setRandomSpeed
     * @returns {void} No return value.
     */
    setRandomSpeed() {
        this.speed = -8 - Math.random() * 7;
    }


    /**
     * Initiates the animation loop for the UFO. The UFO moves left continuously,
     * oscillates vertically using a sine wave based on a floating offset, and if it
     * moves offscreen to the right, resets its x-coordinate and assigns a new random speed.
     *
     * @function animate
     * @returns {void} No return value.
     */
    animate() {
        setStoppableIverval(() => {
            this.moveLeft();
            this.y = 90 + Math.sin(this.floatOffset) * 22;
            this.floatOffset += 0.1;

            if (this.x > level1.levelEndX + 1000) {
                this.x = level1.levelStartX - 1000;
                this.setRandomSpeed();
            }
        }, 1000 / 60);
    }


}
