class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = true;
    static throwOtherDirection = false;
    speedY = 0;
    acceleration = 1;
    lifePoints = 100;
    lastHit = 0;
    currentImageLastPic = 0;


    setThrowOtherDirection(boolean) {
        MovableObject.throwOtherDirection = boolean;
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        },1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 358;
        } else {
        return this.y < 310;
        }
    }


    isColliding(obj) {
        let thisRight = this.x + this.collisionBoxOffsetX + this.collisionBoxWidth;
        let thisBottom = this.y + this.collisionBoxOffsetY + this.collisionBoxHeight;
        let objRight = obj.x + obj.collisionBoxOffsetX + obj.collisionBoxWidth;
        let objBottom = obj.y + obj.collisionBoxOffsetY + obj.collisionBoxHeight;
    
        return (
            thisRight >= obj.x + obj.collisionBoxOffsetX &&
            this.x + this.collisionBoxOffsetX <= objRight &&
            thisBottom >= obj.y + obj.collisionBoxOffsetY &&
            this.y + this.collisionBoxOffsetY <= objBottom
        );
    }


    hit() {
        this.lifePoints -= 5;
        if(this.lifePoints < 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.600;
    }

    isDead() {
        return this.lifePoints == 0;
    }


    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    
    playAnimationGrenade(images, runthrough) {
        if (this.runCount === undefined) {
            this.runCount = 0;
        }
    
        if (this.runCount < runthrough) {
            let index = this.currentImage % images.length;
            let path = images[index];
            this.img = this.imageCache[path];
            
            this.currentImage++;
            this.runCount++;
        }
    }


    // for die animation
    playAnimationOneTime(images) {
        if (this.currentImage < images.length - 1) {
            let path = images[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            // Letztes Bild anzeigen und beibehalten
            let path = images[images.length - 1];
            this.img = this.imageCache[path];
        }
    }

    
    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }


}