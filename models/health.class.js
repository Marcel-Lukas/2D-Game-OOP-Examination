class Health extends MovableObject {
    height = 48;
    width = 42;

    // Hitbox
    collisionBoxOffsetY = -3;
    collisionBoxOffsetX = -6;
    collisionBoxWidth = 54;
    collisionBoxHeight = 54;


    IMAGES = [
        'img/health/heart-00.png',
        'img/health/heart-01.png'
    ];


    constructor(x, y) {
        super().loadImage('img/health/heart-00.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 333);
    }
}