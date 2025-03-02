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
     * Resolves the image index for the lifebar based on the current boss health.
     * It calculates the health percentage relative to a maximum of 2000, converts
     * it into a percentage, and divides by 5 to determine the corresponding image index.
     * If the boss has a non-zero health but the calculated index is 0, the index is adjusted to 1.
     * Finally, the index is clamped between 0 and 21.
     *
     * @returns {number} The index of the image to display in the lifebar.
     */
    resolveImageIndex() {
        let percentage = (this.percentage / 2000) * 100;
        let index = Math.floor(percentage / 5);
        if (this.percentage > 0 && index === 0) {
            index = 1;
        }
        return Math.max(0, Math.min(20, index));
    }
    
    
}