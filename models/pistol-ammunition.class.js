class PistolAmmunition extends MovableObject{
    height = 48;
    width = 48;

    // Hitbox
    collisionBoxOffsetY = -3;
    collisionBoxOffsetX = -3;
    collisionBoxWidth = 54;
    collisionBoxHeight = 54;

    IMAGES = [
        'img/pistol/pistol-ammunition-00.png',
        'img/pistol/pistol-ammunition-01.png',
        'img/pistol/pistol-ammunition-02.png',
        'img/pistol/pistol-ammunition-03.png',
        'img/pistol/pistol-ammunition-04.png',
        'img/pistol/pistol-ammunition-05.png',
        'img/pistol/pistol-ammunition-06.png',
        'img/pistol/pistol-ammunition-07.png',
        'img/pistol/pistol-ammunition-08.png',
        'img/pistol/pistol-ammunition-09.png'
    ];

    constructor(x, y) {
        super().loadImage('img/pistol/pistol-ammunition-00.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setStoppableIverval(() => {
            this.playAnimation(this.IMAGES);
        }, 120);
    }
}