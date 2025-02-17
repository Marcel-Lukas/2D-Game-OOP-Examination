class ShootableObject extends MovableObject {

    height = 10;
    width = 40;

    // Hitbox
    collisionBoxOffsetY = -8;
    collisionBoxHeight = 26;

    collisionBoxOffsetX = -4;
    collisionBoxWidth = 48;


    IMAGE_R = [
        'img/pistol/bullet-R.png'
    ];

    IMAGE_L = [
        'img/pistol/bullet-L.png'
    ];

    constructor(x, y, speed) {
        super().loadImage('img/pistol/bullet-R.png');
        this.loadImages(this.IMAGE_R);
        this.loadImages(this.IMAGE_L);

        this.x = x;
        this.y = y;
        this.speed = speed;
        this.shoot();
    }
    

    shoot() {
        let shootDirection = MovableObject.throwOtherDirection;

        setInterval(() => {
            this.shootAndAnimateBullet(shootDirection); 
        }, 50)
    }


    shootAndAnimateBullet(shootDirection) {
        let latenz = 180;
        let bulletSpeed = 33;

        if (shootDirection === false) {
            this.playAnimation(this.IMAGE_L);
            setTimeout(() => {
                this.x += bulletSpeed;
            }, latenz);
        } else {
            this.loadImages(this.IMAGE_R);
            setTimeout(() => {
                this.x -= bulletSpeed;
            }, latenz);
        }
    }



}