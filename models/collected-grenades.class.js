class CollectedGrenades extends DrawableObject {

    IMAGE_GRENADE = ["img/grenade/grenade-00.png"];

    collectedGrenades = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


    constructor() {
        super();
        this.loadImage(this.IMAGE_GRENADE);
        this.x = 0;
        this.y = 44;
        this.width = 55;
        this.height = 55;
    }


    draw(ctx) {
        super.draw(ctx);
        ctx.font = "bold 34px KuaiLe, serif";
        ctx.fillStyle = "rgb(93, 94, 93)";

        ctx.shadowColor = "rgb(238, 238, 238)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        this.text = "x " + this.collectedGrenades.length;
        ctx.fillText(this.text, this.x + 50, this.y + 41);

        // Shadow zurücksetzen
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }
}
