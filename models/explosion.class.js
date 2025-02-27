class Explosion extends MovableObject {

    // Hitbox
    collisionBoxOffsetY = -50;
    collisionBoxHeight = 250;

    collisionBoxOffsetX = 55;
    collisionBoxWidth = 160;


    IMAGES_EXPLOSION = [
        'img/explosion/explosion-00.png',
        'img/explosion/explosion-01.png',
        'img/explosion/explosion-02.png',
        'img/explosion/explosion-03.png',
        'img/explosion/explosion-04.png',
        'img/explosion/explosion-05.png',
        'img/explosion/explosion-06.png',
        'img/explosion/explosion-07.png',
        'img/explosion/explosion-08.png',
        'img/explosion/explosion-09.png',
        'img/explosion/explosion-10.png'
    ];


    constructor(x) {
        super().loadImage('img/explosion/explosion-05.png');
        this.loadImages(this.IMAGES_EXPLOSION);

        this.width = 270;
        this.height = 210;

        this.x = x;
        this.y = 240;

        this.explode();
    }
    

    animationSpeeds = {
        detonationSpeed: 70,
    };


    explode() {
        setStoppableIverval(() => {
            this.playsTimedAnimation(this.IMAGES_EXPLOSION, 'detonationSpeed');
        }, 1000 / 60);
    }


}