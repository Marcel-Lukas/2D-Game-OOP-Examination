class ThrowableObject extends MovableObject{
    world;


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
        'img/explosion/explosion-09.png'
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

    isGrenadeExploded = false;
    isGrenadeExplodedOnEnemy = false;
    isGrenadeExplodedOnEndboss = false;


    collisionBoxOffsetY = 20;
    collisionBoxOffsetX = 20;
    collisionBoxWidth = 20;
    collisionBoxHeight = 20;


    explosionHeight = 180;
    explosionWidth = 235;

    explosionHeightOnEnemy = 85;
    explosionWidthOnEnemy = 111;

    rotationHeight = 100;
    rotationWidth = 70;

    constructor(x, y, speed) {
        super().loadImage('img/grenade/grenade-12.png');
        this.loadImages(this.IMAGES_EXPLOSION);
        this.loadImages(this.IMAGES_ROTATION);

        this.x = x;
        this.y = y;

        this.height = this.rotationHeight;
        this.width = this.rotationWidth;

        this.speed = speed;
        this.speedY = 20;

        this.applyGravity();
        this.throw();
    }
    

    throw() {
        setInterval( () => {
            this.x += 16;
        }, 65);
    }


    // throw() {

    //     this.lastInt = setInterval(() => {
    //         this.throwAndAnimateGrenade(true); 
    //     }, 65)
    // }


    // throwAndAnimateGrenade(throwDirection = true) {
    //     if (throwDirection === false && !this.isGrenadeExploded) {
    //         this.x += (this.speed + 1);
    //         this.playAnimation(this.IMAGES_ROTATION);
    //     } else if (throwDirection === true && !this.isGrenadeExploded) {
    //         this.x -= (this.speed + 1);
    //         this.playAnimation(this.IMAGES_ROTATION);
    //     } else if (this.isGrenadeExploded === true && this.isGrenadeExplodedOnEndboss === true ) {
    //         this.height = this.explosionHeight;
    //         this.width = this.explosionWidth;
    //         this.playAnimation(this.IMAGES_EXPLOSION);
    //     } else if ( this.isGrenadeExplodedOnEnemy === true) {
    //         this.height = this.explosionHeightOnEnemy;
    //         this.width = this.explosionWidthOnEnemy;
    //         this.playAnimation(this.IMAGES_EXPLOSION);
    //     }
    // }




}