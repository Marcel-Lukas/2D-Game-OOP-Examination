class Endboss extends MovableObject {

    height = 320;
    width = 280;
    y = 130;

    
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
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 140);
    }

}