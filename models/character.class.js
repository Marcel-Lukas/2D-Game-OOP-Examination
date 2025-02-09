class Character extends MovableObject {

    height = 300;
    width = 133;
    y = -136;
    speed = 7;

    offset = {
        top: 120,
        bottom: 30,
        left: 40,
        right: 30
    }

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];


    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];


    world;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();

    }

    animate() {

        setInterval(() => {

            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.characterMoveRight();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.characterMoveLeft();
            }
            
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.characterJump();
            }

            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => { 

            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 140);
    }

 


}
