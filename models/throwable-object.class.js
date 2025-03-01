/**
 * Represents a throwable object (such as a grenade) in the game world that can be thrown,
 * animated with rotation, and eventually trigger an explosion. Inherits from {@link MovableObject}.
 *
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    /**
     * A reference to the game world.
     * @type {World}
     */
    world;

    
    /**
     * The height & width of the throwable object sprite.
     * @type {number}
     * @default 55
     */
    height = 55;
    width = 55;


    /**
     * Hitbox properties
     * @type {number}
     */
    collisionBoxOffsetY = 0;
    collisionBoxOffsetX = 0;
    collisionBoxWidth = 55;
    collisionBoxHeight = 55;


    /**
     * An array of image paths for the explosion animation.
     * @type {string[]}
     */
    IMAGES_EXPLOSION = [
        'img/explosion/explosion-00.png',
        'img/explosion/explosion-01.png',
        'img/explosion/explosion-02.png',
        'img/explosion/explosion-03.png',
        'img/explosion/explosion-04.png',
        'img/explosion/explosion-05.png',
        'img/explosion/explosion-06.png',
        'img/explosion/explosion-07.png',
        'img/explosion/explosion-08.png',
        'img/explosion/explosion-09.png',
        'img/explosion/explosion-10.png'
    ];


    /**
     * An array of image paths for the rotation animation (grenade spinning).
     * @type {string[]}
     */
    IMAGES_ROTATION = [
        'img/grenade/grenade-00.png',
        'img/grenade/grenade-01.png',
        'img/grenade/grenade-02.png',
        'img/grenade/grenade-03.png',
        'img/grenade/grenade-04.png',
        'img/grenade/grenade-05.png',
        'img/grenade/grenade-06.png',
        'img/grenade/grenade-07.png',
        'img/grenade/grenade-08.png',
        'img/grenade/grenade-09.png',
        'img/grenade/grenade-10.png',
        'img/grenade/grenade-11.png',
        'img/grenade/grenade-12.png'
    ];


    /**
     * Creates a new ThrowableObject instance. Loads the initial grenade image,
     * explosion and rotation animations, sets the object's position and speed,
     * applies gravity, and starts the throw action.
     *
     * @constructor
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     * @param {number} speed - The horizontal speed at which the object moves.
     */
    constructor(x, y, speed) {
        super().loadImage('img/grenade/grenade-12.png');
        this.loadImages(this.IMAGES_EXPLOSION);
        this.loadImages(this.IMAGES_ROTATION);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.speedY = 20;
        this.applyGravity();
        this.throw();
    }


    /**
     * Initiates the throwing action. Repeatedly calls {@link throwAndAnimateGrenade}
     * at fixed intervals (every 65 milliseconds) using the current throw direction.
     *
     * @function throw
     * @returns {void} No return value.
     */
    throw() {
        let throwDirection = MovableObject.throwOtherDirection;
        setStoppableIverval(() => {
            this.throwAndAnimateGrenade(throwDirection);
        }, 65);
    }


    /**
     * Animates the throwable object during its throw by updating its horizontal position
     * based on the throw direction and playing its rotation animation. If the object has reached
     * a specified vertical position or has already exploded, it triggers an explosion.
     * The explosion is added to the world's explosions array, and both the throwable object and
     * the explosion are removed after specified delays.
     *
     * @function throwAndAnimateGrenade
     * @param {boolean} throwDirection - The direction of the throw. When true, the object moves left;
     *                                   when false, it moves right.
     * @returns {void} No return value.
     */
    throwAndAnimateGrenade(throwDirection) {
        this.x += throwDirection ? -16 : 16;
        this.playAnimation(this.IMAGES_ROTATION);
        if (this.y < 358 || this.hasExploded) return;
        const explosion = new Explosion(this.x + (throwDirection ? -100 : -110));
        this.world.explosions.push(explosion);
        this.hasExploded = true;
        this.removeItem(this.world.throwableObjects, this, 70);
        this.removeItem(this.world.explosions, explosion, 888);
        EXPLOSION_SOUND.play();
    }


    /**
     * Removes the specified item from the given array after a set delay.
     *
     * @function removeItem
     * @param {Array} arr - The array from which the item will be removed.
     * @param {*} item - The item to be removed.
     * @param {number} delay - The delay in milliseconds before removal.
     * @returns {void} No return value.
     */
    removeItem(arr, item, delay) {
        const i = arr.indexOf(item);
        if (i !== -1) setTimeout(() => arr.splice(i, 1), delay);
    }


}
