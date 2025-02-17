class Endboss extends MovableObject {
    world;
    height = 320;
    width = 280;
    y = 130;

    // Hitbox
    collisionBoxOffsetY = 46;
    collisionBoxHeight = 250;

    collisionBoxOffsetX = 80;
    collisionBoxWidth = 120;


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

    IMAGES_WALKING_WITH_GUN = [
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_000.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_001.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_002.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_003.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_004.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_005.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_006.png',
        'img/endboss/walkGun/__grey_alien_black_jump_suit_walk_with_gun_007.png'
    ];

    IMAGES_SHOOTING = [
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_000.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_001.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_002.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_003.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_004.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_005.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_006.png',
        'img/endboss/shootStanding/__grey_alien_black_jump_suit_shoot_standing_007.png'
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

    constructor() {
        super().loadImage('img/endboss/idle/__grey_alien_black_jump_suit_idle_006.png');

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_WALKING_WITH_GUN);
        this.loadImages(this.IMAGES_SHOOTING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WHACKED);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 5425;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 140);
    }

}