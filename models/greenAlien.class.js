class GreenAlien extends MovableObject {

    height = 144;
    width = 116;
    y = 288;
    lifePoints = 100;

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


    IMAGES_HURT = [
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_001.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_002.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_003.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_004.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_005.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_006.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_007.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_008.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_009.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_010.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_011.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_012.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_013.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_014.png',
        'img/alien-green/whacked/__friendly_alien_green_skin_whacked_015.png'
    ];


    IMAGES_DEAD = [
        'img/alien-green/die/__friendly_alien_green_skin_die_000.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_001.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_002.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_003.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_004.png',
        'img/alien-green/die/__friendly_alien_green_skin_die_005.png'
    ];


    constructor(x) {
        super().loadImage('img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_001.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x;

        this.speed = 0.20;

        this.run();
    }


    run() {
        setInterval(() => {
            this.alienAnimation();
        }, 1000 / 60);

        setInterval(() => {
            this.moveLeft();
            if (this.x < level1.levelStartX - 555) {
                this.x = level1.levelEndX + 400;
            }
        }, 1000 / 60);
    }


    animationSpeeds = {
        walking: 180,
        hurt: 80
    };


    alienAnimation() {
        if (this.isDead()) {
            this.speed = 0;
            this.playAnimationOneTime(this.IMAGES_DEAD);

        } else if (this.isHurt()) {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_HURT, 'hurt');

        } else {
            setTimeout(() => {
                this.speed = 0.20;
                this.playsTimedAnimation(this.IMAGES_WALKING, 'walking');
            }, 77);
        }
    }



    
}
