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

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }

}