class BrainAlien extends MovableObject {

    height = 190;
    width = 146;
    y = 246;


    // Hitbox
    collisionBoxOffsetY = 25;
    collisionBoxHeight = 150;

    collisionBoxOffsetX = 32;
    collisionBoxWidth = 70;


    IMAGES_WALKING = [
        'img/brain-alien/walk/__green_alien_walk_000.png',
        'img/brain-alien/walk/__green_alien_walk_001.png',
        'img/brain-alien/walk/__green_alien_walk_002.png',
        'img/brain-alien/walk/__green_alien_walk_003.png',
        'img/brain-alien/walk/__green_alien_walk_004.png',
        'img/brain-alien/walk/__green_alien_walk_005.png',
        'img/brain-alien/walk/__green_alien_walk_006.png',
        'img/brain-alien/walk/__green_alien_walk_007.png'
    ];


    constructor(x) {
        super().loadImage('img/brain-alien/walk/__green_alien_walk_000.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;

        this.speed = 0.20 + Math.random() * 0.2;
 
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

