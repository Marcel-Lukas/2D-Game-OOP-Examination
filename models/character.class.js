class Character extends MovableObject {

    height = 120;
    width = 137;
    y = 310;
    x = 222;
    speed = 6;


    offset = {
        top: 12,
        bottom: 15,
        left: 88,
        right: 70
    }


    IMAGES_IDLE = [
        'img/character/idle/idle-00.png',
        'img/character/idle/idle-01.png',
        'img/character/idle/idle-02.png',
        'img/character/idle/idle-03.png',
        'img/character/idle/idle-04.png',
        'img/character/idle/idle-05.png',
        'img/character/idle/idle-06.png',
        'img/character/idle/idle-07.png',
        'img/character/idle/idle-08.png',
        'img/character/idle/idle-09.png',
        'img/character/idle/idle-10.png',
        'img/character/idle/idle-11.png',
        'img/character/idle/idle-12.png',
        'img/character/idle/idle-13.png',
        'img/character/idle/idle-14.png',
        'img/character/idle/idle-15.png',
        'img/character/idle/idle-16.png',
        'img/character/idle/idle-17.png',
        'img/character/idle/idle-18.png',
        'img/character/idle/idle-19.png',
        'img/character/idle/idle-20.png',
        'img/character/idle/idle-21.png',
        'img/character/idle/idle-22.png',
        'img/character/idle/idle-23.png',
        'img/character/idle/idle-24.png'
    ];

    IMAGES_WALKING = [
        'img/character/walk/walk-00.png',
        'img/character/walk/walk-01.png',
        'img/character/walk/walk-02.png',
        'img/character/walk/walk-03.png',
        'img/character/walk/walk-04.png',
        'img/character/walk/walk-05.png',
        'img/character/walk/walk-06.png',
        'img/character/walk/walk-07.png',
        'img/character/walk/walk-08.png',
        'img/character/walk/walk-09.png',
        'img/character/walk/walk-10.png',
        'img/character/walk/walk-11.png',
        'img/character/walk/walk-12.png',
        'img/character/walk/walk-13.png',
        'img/character/walk/walk-14.png',
        'img/character/walk/walk-15.png'
    ];

    IMAGES_JUMPING = [
        'img/character/jump/jump-00.png',
        'img/character/jump/jump-01.png',
        'img/character/jump/jump-02.png',
        'img/character/jump/jump-03.png',
        'img/character/jump/jump-04.png',
        'img/character/jump/jump-05.png',
        'img/character/jump/jump-06.png',
        'img/character/jump/jump-07.png',
        'img/character/jump/jump-08.png',
        'img/character/jump/jump-09.png',
        'img/character/jump/jump-10.png',
        'img/character/jump/jump-11.png'
    ];

    IMAGES_THROW = [
        'img/character/throw/throw-00.png',
        'img/character/throw/throw-01.png',
        'img/character/throw/throw-02.png',
        'img/character/throw/throw-03.png',
        'img/character/throw/throw-04.png',
        'img/character/throw/throw-05.png',
        'img/character/throw/throw-06.png',
        'img/character/throw/throw-07.png',
        'img/character/throw/throw-08.png',
        'img/character/throw/throw-09.png'
    ];

    IMAGES_PUNCH = [
        'img/character/punch/punch-00.png',
        'img/character/punch/punch-01.png',
        'img/character/punch/punch-02.png',
        'img/character/punch/punch-03.png',
        'img/character/punch/punch-04.png',
        'img/character/punch/punch-05.png',
        'img/character/punch/punch-06.png',
        'img/character/punch/punch-07.png',
        'img/character/punch/punch-08.png',
        'img/character/punch/punch-09.png'
    ];

    IMAGES_SHOOT = [
        'img/character/shoot/shoot-00.png',
        'img/character/shoot/shoot-01.png',
        'img/character/shoot/shoot-02.png',
        'img/character/shoot/shoot-03.png',
        'img/character/shoot/shoot-04.png',
        'img/character/shoot/shoot-05.png',
        'img/character/shoot/shoot-06.png',
        'img/character/shoot/shoot-07.png',
        'img/character/shoot/shoot-08.png',
        'img/character/shoot/shoot-09.png'
    ];

    IMAGES_DEFENSE = [
        'img/character/defense/defense-00.png',
        'img/character/defense/defense-01.png',
        'img/character/defense/defense-02.png',
        'img/character/defense/defense-03.png',
        'img/character/defense/defense-04.png',
        'img/character/defense/defense-05.png',
        'img/character/defense/defense-06.png',
        'img/character/defense/defense-07.png'
    ];

    IMAGES_HURT = [
        'img/character/hurt/hurt-00.png',
        'img/character/hurt/hurt-01.png',
        'img/character/hurt/hurt-02.png',
        'img/character/hurt/hurt-03.png',
        'img/character/hurt/hurt-04.png'
    ];

    IMAGES_DEAD = [
        'img/character/die/die-00.png',
        'img/character/die/die-01.png',
        'img/character/die/die-02.png',
        'img/character/die/die-03.png',
        'img/character/die/die-04.png'
    ];


    

    constructor() {
        super().loadImage('img/character/idle/idle-00.png');

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_PUNCH);
        this.loadImages(this.IMAGES_SHOOT);
        this.loadImages(this.IMAGES_DEFENSE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.applyGravity();

        this.intervals();
    }


    intervals() {
        setInterval(() => this.characterControls(), 1000 / 60);
        setInterval(() => this.characterAnimation(), 80);
    }


    characterControls() {

        if (this.possibleMoveRight()) {
            this.otherDirection = true;
            this.moveRight();
        }

        if (this.possibleMoveLeft()) {
            this.otherDirection = false;
            this.moveLeft();
        }

        if (this.possibleJump()) {
            this.jump();
        }

        this.world.cameraX = -this.x + 100;
    }


    possibleMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.lifePoints == 0;
    }


    possibleMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -500 && !this.lifePoints == 0;
    }


    possibleJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround() && !this.lifePoints == 0;
    }



    characterAnimation() {

        this.playAnimation(this.IMAGES_IDLE);
        if (this.isDead()) {
            this.playAnimationOneTime(this.IMAGES_DEAD); 
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.THROW) {
            this.playAnimation(this.IMAGES_THROW);
        } else {
            if (this.characterWalking()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }

 
    characterWalking() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    jump() {
        this.speedY = 17;
    }
    
}
