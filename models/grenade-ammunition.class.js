/**
 * Represents grenade ammunition in the game world, including its appearance,
 * position, and hitbox properties. Inherits from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class GrenadeAmmunition extends MovableObject {


    /**
     * Grenade Ammunition properties
     * @type {number}
     */
    height = 50;
    width = 50;
    y = 376;

    
    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = -4;
    collisionBoxOffsetX = -4;
    collisionBoxWidth = 58;
    collisionBoxHeight = 58;


    /**
     * Creates a new GrenadeAmmunition instance, loads the provided image,
     * and sets its x-coordinate.
     *
     * @constructor
     * @param {string} imagePath - The path to the grenade ammunition image.
     * @param {number} x - The x-coordinate for the grenade ammunition on the canvas.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }


}