class GreenAlien extends MovableObject {

    height = 144;
    width = 116;
    y = 288;


    // Hitbox
    collisionBoxOffsetY = 25;
    collisionBoxHeight = 110;

    collisionBoxOffsetX = 15;
    collisionBoxWidth = 70;
    

    IMAGES_WALKING = [
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_000.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_001.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_002.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_003.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_004.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_005.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_006.png',
        'img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_007.png'
    ];


    constructor(x) {
        super().loadImage('img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_001.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;

        this.speed = 0.20 + Math.random() * 0.4;

        this.animate();
    }

    
    animate() {
        // setInterval(() => {
        //     this.moveLeft();
        //     if (this.x < level1.levelStartX - 555) {
        //         this.x = level1.levelEndX + 400;
        //     }
        // }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 180);
    }


}

