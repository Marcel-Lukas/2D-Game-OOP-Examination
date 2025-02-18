class BrainAlien extends MovableObject {

    height = 190;
    width = 146;
    y = 246;
    lifePoints = 300;


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

    IMAGES_HURT = [
        'img/brain-alien/hurt/__green_alien_hurt_000.png',
        'img/brain-alien/hurt/__green_alien_hurt_001.png',
        'img/brain-alien/hurt/__green_alien_hurt_002.png',
        'img/brain-alien/hurt/__green_alien_hurt_003.png',
        'img/brain-alien/hurt/__green_alien_hurt_004.png',
        'img/brain-alien/hurt/__green_alien_hurt_005.png'
    ];


    IMAGES_DEAD = [
        'img/brain-alien/die/__green_alien_die_000.png',
        'img/brain-alien/die/__green_alien_die_001.png',
        'img/brain-alien/die/__green_alien_die_002.png',
        'img/brain-alien/die/__green_alien_die_003.png',
        'img/brain-alien/die/__green_alien_die_004.png',
        'img/brain-alien/die/__green_alien_die_005.png'
    ];


    constructor(x) {
        super().loadImage('img/brain-alien/walk/__green_alien_walk_000.png');
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


    lastFrameTime = 0;
    currentImage = 0;

    animationSpeeds = {
        walking: 180,
        hurt: 160
    };


    playAlienAnimation(images, animationKey) {
        let speed = this.animationSpeeds[animationKey];
        let now = Date.now();

        if (now - this.lastFrameTime > speed) {
            this.lastFrameTime = now;
            
            let index = this.currentImage % images.length;
            let path = images[index];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }


    alienAnimation() {
        if (this.isDead()) {
            this.speed = 0;
            this.playAnimationOneTime(this.IMAGES_DEAD);

        } else if (this.isHurt()) {
            this.speed = 0;
            this.playAlienAnimation(this.IMAGES_HURT, 'hurt');

        } else {
            setTimeout(() => {
                this.speed = 0.20;
                this.playAlienAnimation(this.IMAGES_WALKING, 'walking');
            }, 77);
        }
    }



}

