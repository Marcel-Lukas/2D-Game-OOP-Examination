/**
 * Represents a background object in the game world.
 * Inherits properties and methods from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject{

    /**
     * Background properties
     * @type {number}
     */
    width = 720;
    height= 480;


    /**
     * Creates a new BackgroundObject instance, loads the specified image,
     * and positions it correctly at the bottom of the game world.
     *
     * @constructor
     * @param {string} imagePath - The path to the background image.
     * @param {number} x - The x-coordinate of the background object.
     */
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }

    
}