class GreenAlien extends MovableObject {
    world;
    y = 288;
    height = 144;
    width = 116;


    // Hitbox
    collisionBoxOffsetY = 25;
    collisionBoxOffsetX = 35;
    collisionBoxWidth = 55;
    collisionBoxHeight = 110;


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


    constructor() {
        super().loadImage('img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_000.png');

        this.loadImages(this.IMAGES_WALKING);

        this.x = 720 + Math.random() * 4444;
        this.speed = 0.15 + Math.random() * 0.25;


        this.animate();
    }

    
    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 180);
    }


}

