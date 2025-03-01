/**
 * Extends {@link DrawableObject} with additional properties and methods for motion,
 * gravity, collision detection, and animation handling.
 *
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    
    /**
     * The current horizontal speed of the object.
     * @type {number}
     * @default 6
     */
    speed = 6;


    /**
     * Indicates the direction the object is currently facing.
     * When true, the object is facing right.
     * @type {boolean}
     * @default true
     */
    otherDirection = true;


    /**
     * A static flag to indicate the direction for throwing objects.
     * When true, objects will be thrown to the right.
     * @type {boolean}
     * @static
     * @default false
     */
    static throwOtherDirection = false;


    /**
     * The current vertical speed of the object, used for jumping or falling.
     * @type {number}
     * @default 0
     */
    speedY = 0;


    /**
     * The amount by which {@link speedY} decreases over time, simulating gravity.
     * @type {number}
     * @default 1
     */
    acceleration = 1;


    /**
     * A timestamp (in milliseconds) of the last time the object was hit,
     * used for determining if the object is still in a "hurt" state.
     * @type {number}
     * @default 0
     */
    lastHit = 0;


    /**
     * Holds the last displayed animation frame index for certain animations.
     * @type {number}
     * @default 0
     */
    currentImageLastPic = 0;


    /**
     * A timestamp (in milliseconds) of the last animation frame, used for
     * controlling animation frame rates in {@link playsTimedAnimation}.
     * @type {number}
     * @default 0
     */
    lastFrameTime = 0;


    /**
     * The index of the current image frame for animations.
     * @type {number}
     * @default 0
     */
    currentImage = 0;


    /**
     * Sets the static {@link throwOtherDirection} property, determining the
     * direction in which objects are thrown.
     *
     * @function setThrowOtherDirection
     * @param {boolean} boolean - If true, objects will be thrown to the right; if false, to the left.
     * @returns {void} No return value.
     */
    setThrowOtherDirection(boolean) {
        MovableObject.throwOtherDirection = boolean;
    }


    /**
     * Applies gravity to the object by adjusting its vertical position (y-coordinate)
     * and reducing its vertical speed over time, simulating a gravitational pull.
     * Continues while the object is above the ground or still moving upward.
     *
     * @function applyGravity
     * @returns {void} No return value.
     */
    applyGravity() {
        setStoppableIverval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * Determines if the object is above the ground. If the object is a {@link ThrowableObject},
     * uses a different y-threshold for ground level.
     *
     * @function isAboveGround
     * @returns {boolean} True if the object is above the ground; otherwise false.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 358;
        } else {
            return this.y < 310;
        }
    }


    /**
     * Checks if this object is colliding with another object based on their
     * respective collision boxes.
     *
     * @function isColliding
     * @param {MovableObject} obj - Another object to check for collision.
     * @returns {boolean} True if the objects are colliding; otherwise false.
     */
    isColliding(obj) {
        let thisLeft = this.x + this.collisionBoxOffsetX;
        let thisTop = this.y + this.collisionBoxOffsetY;
        let thisRight = thisLeft + this.collisionBoxWidth;
        let thisBottom = thisTop + this.collisionBoxHeight;
        let objLeft = obj.x + obj.collisionBoxOffsetX;
        let objTop = obj.y + obj.collisionBoxOffsetY;
        let objRight = objLeft + obj.collisionBoxWidth;
        let objBottom = objTop + obj.collisionBoxHeight;
        return (
            thisRight >= objLeft &&
            thisLeft <= objRight &&
            thisBottom >= objTop &&
            thisTop <= objBottom
        );
    }


    /**
     * Reduces this object's life points by the specified damage amount.
     * If life points drop below zero, they are set to zero. Otherwise, updates
     * the {@link lastHit} timestamp.
     *
     * @function hit
     * @param {number} damage - The amount of damage inflicted on this object.
     * @returns {void} No return value.
     */
    hit(damage) {
        this.lifePoints -= damage;
        if (this.lifePoints < 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Checks if this object is still in a "hurt" state by comparing the current
     * time to the {@link lastHit} timestamp.
     *
     * @function isHurt
     * @returns {boolean} True if the object is in a hurt state; otherwise false.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.777;
    }


    /**
     * Checks if this object's life points have dropped to zero.
     *
     * @function isDead
     * @returns {boolean} True if life points are zero; otherwise false.
     */
    isDead() {
        return this.lifePoints == 0;
    }


    /**
     * Plays an animation by cycling through an array of images. Uses the
     * {@link currentImage} index to determine which image to display next.
     *
     * @function playAnimation
     * @param {string[]} images - An array of image paths to cycle through.
     * @returns {void} No return value.
     */
    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Plays an animation once by cycling through an array of images up to
     * the final image. Once the last image is reached, it remains displayed.
     *
     * @function playAnimationOneTime
     * @param {string[]} images - An array of image paths for the one-time animation.
     * @returns {void} No return value.
     */
    playAnimationOneTime(images) {
        if (this.currentImage < images.length - 1) {
            let path = images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            let path = images[images.length - 1];
            this.img = this.imageCache[path];
        }
    }


    /**
     * Plays a timed animation by cycling through an array of images at intervals
     * determined by a specified speed. The function checks the time elapsed since
     * the last frame, and only advances the animation if enough time has passed.
     *
     * @function playsTimedAnimation
     * @param {string[]} images - An array of image paths for the animation frames.
     * @param {string} animationKey - A key referencing the animation's speed in {@link animationSpeeds}.
     * @returns {void} No return value.
     */
    playsTimedAnimation(images, animationKey) {
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


    /**
     * Moves the object to the right by adding {@link speed} to its x-coordinate.
     *
     * @function moveRight
     * @returns {void} No return value.
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Moves the object to the left by subtracting {@link speed} from its x-coordinate.
     *
     * @function moveLeft
     * @returns {void} No return value.
     */
    moveLeft() {
        this.x -= this.speed;
    }



}
