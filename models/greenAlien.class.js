class GreenAlien extends MovableObject {

    y = 288;
    height = 144;
    width = 116;

    IMAGES_WALKING = [
        'img/alien-green/walk/__friendly_alien_green_skin_walk_000.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_001.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_002.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_003.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_004.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_005.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_006.png',
        'img/alien-green/walk/__friendly_alien_green_skin_walk_007.png'
    ];


    constructor() {
        super().loadImage('img/alien-green/__friendly_alien_green_skin_base_000.png');

        this.loadImages(this.IMAGES_WALKING);

        this.x = 720 + Math.random() * 4444;
        this.speed = 0.15 + Math.random() * 0.25;
        this.speed = 0;

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

