class CollectedGrenades extends DrawableObject {


    /**
     * An array holding all currently collected grenades.
     * @type {any[]}
     */
    collectedGrenades = [];


    /**
     * Creates a new CollectedGrenades instance, initializes its position
     * and size on the canvas, and loads the default grenade image.
     *
     * @constructor
     */
    constructor() {
        super();
        this.loadImage("img/grenade/grenade-00.png");
        this.x = 0;
        this.y = 44;
        this.width = 55;
        this.height = 55;
    }


    /**
     * Draws the grenade icon and the current count of collected grenades on the
     * specified rendering context. The text is styled and shadowed for visibility.
     *
     * @param {CanvasRenderingContext2D} ctx - The rendering context where the image and text are drawn.
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
         * The displayed text showing the number of collected grenades.
         * @type {string}
         */
        this.text = "x " + this.collectedGrenades.length;
        ctx.fillText(this.text, this.x + 50, this.y + 41);

        // Reset shadow properties to default
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }


}
