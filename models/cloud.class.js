/**
 * Represents a cloud object in the game world, including its position, size,
 * movement speed, and animation logic. Inherits properties and methods from
 * {@link MovableObject}.
 *
 * @extends MovableObject
 */
class Cloud extends MovableObject {


    /**
     * Cloud properties
     * @type {number}
     */
    y = 20;
    height = 250;
    width = 500;


    /**
     * Creates a new Cloud instance, loads the provided image, sets its initial
     * position and speed, randomizes its position and size slightly, then
     * starts its animation logic.
     *
     * @constructor
     * @param {string} imagePath - The path to the cloud image.
     * @param {number} x - The initial x-coordinate of the cloud.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = 0.4;
        this.y = 18 + Math.random() * 5;
        this.height = 250 + Math.random() * 30;
        this.width = 500 + Math.random() * 60;
        this.animate();
    }
    

    /**
     * Starts the animation of the cloud. Moves it to the left at a regular interval.
     * If the cloud moves past the left boundary of the level, it is repositioned
     * to the far right end of the level.
     *
     * @returns {void} No return value.
     */
    animate() {
        setStoppableIverval(() => {
            this.moveLeft();
            if (this.x < level1.levelStartX - 555) {
                this.x = level1.levelEndX + 400;
            }
        }, 1000 / 60);
    }


}
