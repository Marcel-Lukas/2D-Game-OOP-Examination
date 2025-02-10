class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    lifePoints = 100;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
        if (this instanceof ThrowableObject) { // Throwable object should always fall
            return true;
        } else {
        return this.y < 136;
        }
    }


    isColliding(mo) {
        return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height -mo.offset.bottom
    }

    hit() {
        this.lifePoints -= 2;
        if(this.lifePoints < 0) {
            this.lifePoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.777;
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


    characterMoveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    characterMoveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    characterJump() {
        this.speedY = 20;
    }


    enemiesMoveLeft() {
        setInterval(() => {
            this.x  -=this.speed;
        },1000 / 60);
    }

    cloudMoveLeft() {
        setInterval(() => {
            this.x  -=this.speed;
        },1000 / 180);
    }


}