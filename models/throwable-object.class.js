class ThrowableObject extends MovableObject{
    world;
    height = 55;
    width = 55;

    // Hitbox
    collisionBoxOffsetY = 0;
    collisionBoxOffsetX = 0;
    collisionBoxWidth = 55;
    collisionBoxHeight = 55;

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


    IMAGES_ROTATION = [
        'img/grenade/grenade-00.png',
        'img/grenade/grenade-01.png',
        'img/grenade/grenade-02.png',
        'img/grenade/grenade-03.png',
        'img/grenade/grenade-04.png',
        'img/grenade/grenade-05.png',
        'img/grenade/grenade-06.png',
        'img/grenade/grenade-07.png',
        'img/grenade/grenade-08.png',
        'img/grenade/grenade-09.png',
        'img/grenade/grenade-10.png',
        'img/grenade/grenade-11.png',
        'img/grenade/grenade-12.png'
    ];


    constructor(x, y, speed) {
        super().loadImage('img/grenade/grenade-12.png');
        this.loadImages(this.IMAGES_EXPLOSION);
        this.loadImages(this.IMAGES_ROTATION);

        this.x = x;
        this.y = y;

        this.speed = speed;
        this.speedY = 20;

        this.applyGravity();
        this.throw();
    }
    

    throw() {
        let throwDirection = MovableObject.throwOtherDirection;

        setInterval(() => {
            this.throwAndAnimateGrenade(throwDirection); 
        }, 65)
    }


    explosionHeight = 200;
    explosionWidth = 200;

    throwAndAnimateGrenade(throwDirection) {
        if (throwDirection === false) {
            this.x += 16;
            this.playAnimationGrenade(this.IMAGES_ROTATION, 26);

            if (this.y >= 358) {
                this.x -= 16;
                // this.height = this.explosionHeight;
                // this.width = this.explosionWidth;
                // this.y -= 145;
                this.playAnimationGrenade(this.IMAGES_EXPLOSION, 33);
            }
        } else {
            this.x -= 16;
            this.playAnimationGrenade(this.IMAGES_ROTATION, 26);

            if (this.y >= 358) {
                this.x += 16;
                // this.height = this.explosionHeight;
                // this.width = this.explosionWidth;
                this.playAnimationGrenade(this.IMAGES_EXPLOSION, 33);
            }
        }
    }






}