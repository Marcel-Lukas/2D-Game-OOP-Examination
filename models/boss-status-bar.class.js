/**
 * Represents the status bar for the boss in the game, displaying the boss's health
 * level as an image. Inherits properties and methods from {@link DrawableObject}.
 *
 * @extends DrawableObject
 */
class BossStatusBar extends DrawableObject{

    /**
     * An array of image paths corresponding to different boss lifebar states.
     * Each image represents a different percentage of the boss's health.
     * @type {string[]}
     */
    IMAGES = [
        'img/bosslifebar/bossLifebar-000.png',
        'img/bosslifebar/bossLifebar-005.png',
        'img/bosslifebar/bossLifebar-010.png',
        'img/bosslifebar/bossLifebar-015.png',
        'img/bosslifebar/bossLifebar-020.png',
        'img/bosslifebar/bossLifebar-025.png',
        'img/bosslifebar/bossLifebar-030.png',
        'img/bosslifebar/bossLifebar-035.png',
        'img/bosslifebar/bossLifebar-040.png',
        'img/bosslifebar/bossLifebar-045.png',
        'img/bosslifebar/bossLifebar-050.png',
        'img/bosslifebar/bossLifebar-055.png',
        'img/bosslifebar/bossLifebar-060.png',
        'img/bosslifebar/bossLifebar-065.png',
        'img/bosslifebar/bossLifebar-070.png',
        'img/bosslifebar/bossLifebar-075.png',
        'img/bosslifebar/bossLifebar-080.png',
        'img/bosslifebar/bossLifebar-085.png',
        'img/bosslifebar/bossLifebar-090.png',
        'img/bosslifebar/bossLifebar-095.png',
        'img/bosslifebar/bossLifebar-100.png'
      ];      
    

    /**
     * Creates a new BossStatusBar instance. Loads all lifebar images,
     * sets its position and dimensions, and initializes the boss health display.
     *
     * @constructor
     */
    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 525;
        this.y = 5;
        this.width = 190;
        this.height = 40;
        this.setPercentage(2000);
    }


    /**
     * Sets the current health percentage for the boss and updates the displayed lifebar image.
     *
     * @param {number} percentage - The current health value of the boss.
     * @returns {void} No return value.
     */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Determines the correct image index for the lifebar based on the boss's current health percentage.
     * The index is calculated by dividing the percentage by 100 and clamped between 0 and 20.
     *
     * @returns {number} The index of the image to be displayed in the lifebar.
     */
    resolveImageIndex() {
        let index = Math.floor(this.percentage / 100);
        if (index < 0) index = 0;
        if (index > 20) index = 20;
        return index;
    }


}
