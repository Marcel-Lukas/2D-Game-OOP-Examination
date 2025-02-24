class Endboss extends MovableObject {
    world;
    height = 320;
    width = 280;
    y = 130;
    lifePoints = 2000;

    // Hitbox
    collisionBoxOffsetY = 46;
    collisionBoxHeight = 250;

    collisionBoxOffsetX = 80;
    collisionBoxWidth = 120;

    bossAlertSound = new Audio('audio/alien-alert.mp3');
    bossDashSound = new Audio('audio/dashSound.mp3');
    bossWalkSound = new Audio('audio/boss-footstep.mp3');


    IMAGES_IDLE = [
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_000.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_001.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_002.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_003.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_004.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_005.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_006.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_007.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_008.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_009.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_010.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_011.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_012.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_013.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_014.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_015.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_016.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_017.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_018.png',
        'img/endboss/idle/__grey_alien_black_jump_suit_idle_019.png'
    ];

    IMAGES_WALKING = [
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_000.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_001.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_002.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_003.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_004.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_005.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_006.png',
        'img/endboss/walk/__grey_alien_black_jump_suit_walk_007.png'
    ];

    IMAGES_DASH = [
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_000.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_001.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_002.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_003.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_004.png',
        'img/endboss/dash/__grey_alien_black_jump_suit_dash_005.png'
    ];

    IMAGES_HURT = [
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_000.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_001.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_002.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_003.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_004.png',
        'img/endboss/hurt/__grey_alien_black_jump_suit_hurt_005.png'
    ];

    IMAGES_WHACKED = [
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_000.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_001.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_002.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_003.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_004.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_005.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_006.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_007.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_008.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_009.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_010.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_011.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_012.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_013.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_014.png',
        'img/endboss/whacked/__grey_alien_black_jump_suit_whacked_015.png'
    ];

    IMAGES_DEAD = [
        'img/endboss/die/__grey_alien_black_jump_suit_die_000.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_001.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_002.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_003.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_004.png',
        'img/endboss/die/__grey_alien_black_jump_suit_die_005.png'
    ];

    IMAGES_ALERT = [
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_000.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_001.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_002.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_008.png',
        'img/endboss/alert/__grey_alien_black_jump_suit_upper_cut_009.png'
    ];

    constructor(x) {
        super().loadImage('img/endboss/idle/__grey_alien_black_jump_suit_idle_006.png');

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DASH);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WHACKED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ALERT);

        this.x = x;

        this.speed = 0.26;

        this.run();
    }

    run() {
        setInterval(() => {
            this.bossAnimation();
        }, 1000 / 60);

        setInterval(() => {
            console.log('Boss Contact = ', this.hadBossFirstContact, ' Boss Leben', this.lifePoints);
        }, 900);
    }


    animationSpeeds = {
        idle: 96,
        walking: 160,
        dash: 111,
        hurt: 111,
        whacked: 60,
        alert: 133
    };

    hadBossFirstContact = false;


    bossAnimation() {
        if (this.world.character.x > 5000 && !this.hadBossFirstContact) {
            this.awakenedBossActions();
            this.hadBossFirstContact = true;

        } else if (this.isHurt()) {
            this.speed = 0;
            this.playsTimedAnimation(this.IMAGES_HURT, 'hurt');

        } else if (this.isDead()) {
            this.speed = 0;
            this.playAnimationOneTime(this.IMAGES_DEAD);
        } 
    }  


    awakenedBossActions() {
        let i = 0;
        let dashCount = 0;
        let phase = 'alert';
    
        setInterval(() => {
            if (phase === 'alert') {
                if (i < 99) {
                    this.playsTimedAnimation(this.IMAGES_ALERT, 'alert');
                    playSound(this.bossAlertSound, 0.8);
                } else {
                    phase = 'dash';
                    dashCount = 0;
                }
            } else if (phase === 'dash') {
                if (dashCount < 150) {
                    this.playsTimedAnimation(this.IMAGES_DASH, 'dash');
                    playSoundInterval(this.bossDashSound, 0.5, 999999999);
                    this.moveLeft();
                    this.speed = 3;
                    dashCount++;
                } else {
                    phase = 'walking';
                }
            } else if (phase === 'walking') {
                if (Math.abs(this.world.character.x - this.x) <= 666) {
                    if (this.world.character.x < this.x) {
                        this.otherDirection = true;
                        this.moveLeft();
                        this.speed = 1;
                    } else if (this.world.character.x > this.x) {
                        this.otherDirection = false;
                        this.moveRight();
                        this.speed = 1;
                    }

                    this.playsTimedAnimation(this.IMAGES_WALKING, 'walking');
                    if (!this.isDead()) {
                        playSound(this.bossWalkSound, 0.2);
                    }
                }
            }
            i++;
        }, 1000 / 60);
    }






    

}