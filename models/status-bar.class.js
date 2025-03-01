/**
 * Represents a status bar for displaying the player's current health or life percentage.
 * Inherits properties and methods from {@link DrawableObject}.
 *
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {

    /**
     * The current life percentage displayed by the status bar.
     * @type {number}
     * @default 100
     */
    percentage = 100;


    /**
     * An array of image paths for different lifebar stages, corresponding to
     * various health percentages.
     * @type {string[]}
     */
    IMAGES = [
        'img/lifebar/lifebar-000.png',
        'img/lifebar/lifebar-005.png',
        'img/lifebar/lifebar-010.png',
        'img/lifebar/lifebar-015.png',
        'img/lifebar/lifebar-020.png',
        'img/lifebar/lifebar-025.png',
        'img/lifebar/lifebar-030.png',
        'img/lifebar/lifebar-035.png',
        'img/lifebar/lifebar-040.png',
        'img/lifebar/lifebar-045.png',
        'img/lifebar/lifebar-050.png',
        'img/lifebar/lifebar-055.png',
        'img/lifebar/lifebar-060.png',
        'img/lifebar/lifebar-065.png',
        'img/lifebar/lifebar-070.png',
        'img/lifebar/lifebar-075.png',
        'img/lifebar/lifebar-080.png',
        'img/lifebar/lifebar-085.png',
        'img/lifebar/lifebar-090.png',
        'img/lifebar/lifebar-095.png',
        'img/lifebar/lifebar-100.png'
    ];


    /**
     * Creates a new StatusBar instance, loads all the lifebar images,
     * sets its position and size, and initializes the displayed percentage.
     *
     * @constructor
     */
    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 8;
        this.y = 5;
        this.width = 190;
        this.height = 40;
        this.setPercentage(100);
    }


    /**
     * Sets the current life percentage and updates the displayed lifebar image accordingly.
     *
     * @function setPercentage
     * @param {number} percentage - The new life percentage to display (0-100).
     * @returns {void} No return value.
     */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Resolves the array index for the lifebar image based on the current life percentage.
     *
     * @function resolveImageIndex
     * @returns {number} The index of the appropriate image in the {@link IMAGES} array.
     */
    resolveImageIndex() {
        let index = Math.floor(this.percentage / 5);
        if (index < 0) index = 0;
        if (index > 20) index = 20;
    
        return index;
    }


}
