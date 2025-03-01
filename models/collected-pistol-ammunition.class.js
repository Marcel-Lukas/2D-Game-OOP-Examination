/**
 * Represents the collected pistol ammunition in the game.
 * Displays the pistol ammo icon and the total amount collected.
 * Inherits properties and methods from {@link DrawableObject}.
 *
 * @extends DrawableObject
 */
class CollectedPistolAmmunition extends DrawableObject {


    /**
     * An array containing the items for all currently collected pistol ammunition.
     * @type {any[]}
     */
    collectedPistolAmmunition = [];


    /**
     * Creates a new CollectedPistolAmmunition instance, sets its position,
     * size on the canvas, and loads a default pistol ammo image.
     *
     * @constructor
     */
    constructor() {
        super();
        this.loadImage("img/pistol/pistol-ammunition-07.png");
        this.x = 1;
        this.y = 92;
        this.width = 55;
        this.height = 55;
    }


    /**
     * Draws the pistol ammo icon and the count of collected ammunition on the provided
     * rendering context. The text is styled with a shadow effect for better visibility.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context on which to draw.
     * @returns {void} No return value.
     */
    draw(ctx) {
        super.draw(ctx);
        ctx.font = "bold 34px KuaiLe, serif";
        ctx.fillStyle = "rgb(93, 94, 93)";

        ctx.shadowColor = "rgb(238, 238, 238)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        /**
         * The displayed text showing the number of collected pistol ammo.
         * @type {string}
         */
        this.text = "x " + this.collectedPistolAmmunition.length;
        ctx.fillText(this.text, this.x + 50, this.y + 41);

        // Reset shadow properties
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    
}
