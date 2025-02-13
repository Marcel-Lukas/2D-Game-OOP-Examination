class BrainAlien extends MovableObject {
    world;
    y = 246;
    height = 190;
    width = 146;


    // Hitbox
    collisionBoxOffsetY = 25;
    collisionBoxOffsetX = 45;
    collisionBoxWidth = 65;
    collisionBoxHeight = 150;

    IMAGES_WALKING = [
        'img/brain_alien/walk/__green_alien_walk_000.png',
        'img/brain_alien/walk/__green_alien_walk_001.png',
        'img/brain_alien/walk/__green_alien_walk_002.png',
        'img/brain_alien/walk/__green_alien_walk_003.png',
        'img/brain_alien/walk/__green_alien_walk_004.png',
        'img/brain_alien/walk/__green_alien_walk_005.png',
        'img/brain_alien/walk/__green_alien_walk_006.png',
        'img/brain_alien/walk/__green_alien_walk_007.png'
    ];


    constructor() {
        super().loadImage('img/alien-green/walkgun/__friendly_alien_green_skin_walk_with_gun_000.png');

        this.loadImages(this.IMAGES_WALKING);

        this.x = 720 + Math.random() * 5000;
        this.speed = 0.10 + Math.random() * 0.35;

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

