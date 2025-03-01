/**
 * Represents an object that can be shot from a pistol, including its visual appearance,
 * movement, and collision properties. Inherits from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class ShootableObject extends MovableObject {

    /**
     * Properties of bullet sprite
     * @type {number}
     */
    height = 10;
    width = 40;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = -8;
    collisionBoxHeight = 26;
    collisionBoxOffsetX = -4;
    collisionBoxWidth = 48;


    /**
     * An array of image paths for the bullet traveling to the right.
     * @type {string[]}
     */
    IMAGE_R = [
        'img/pistol/bullet-R.png'
    ];


    /**
     * An array of image paths for the bullet traveling to the left.
     * @type {string[]}
     */
    IMAGE_L = [
        'img/pistol/bullet-L.png'
    ];


    /**
     * Creates a new ShootableObject instance, initializes its position and speed,
     * loads the necessary images, and begins the shooting sequence.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the bullet on the canvas.
     * @param {number} y - The initial y-coordinate of the bullet on the canvas.
     * @param {number} speed - The horizontal speed of the bullet.
     */
    constructor(x, y, speed) {
        super().loadImage('img/pistol/bullet-R.png');
        this.loadImages(this.IMAGE_R);
        this.loadImages(this.IMAGE_L);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.shoot();
    }


    /**
     * Initiates the bullet's shooting behavior, determining its direction
     * and scheduling repeated animation and movement updates.
     *
     * @returns {void} No return value.
     */
    shoot() {
        let shootDirection = MovableObject.throwOtherDirection;
        setStoppableIverval(() => {
            this.shootAndAnimateBullet(shootDirection);
        }, 50);
    }


    /**
     * Animates and moves the bullet based on the specified direction. After a short latency,
     * the bullet moves left or right by a fixed amount.
     *
     * @param {boolean} shootDirection - The direction of the shot: false means rightward, true means leftward.
     * @returns {void} No return value.
     */
    shootAndAnimateBullet(shootDirection) {
        let latenz = 180;
        let bulletSpeed = 33;
        if (shootDirection === false) {
            this.playAnimation(this.IMAGE_L);
            setTimeout(() => {
                this.x += bulletSpeed;
            }, latenz);
        } else {
            this.loadImages(this.IMAGE_R);
            setTimeout(() => {
                this.x -= bulletSpeed;
            }, latenz);
        }
    }


}
