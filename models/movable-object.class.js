class MovableObject {
    x = 120;
    y = 290;
    height= 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

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
        return this.y < 136;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    isColliding(mo) {
        return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height -mo.offset.bottom
    }


    loadImages(array){
        array.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(images) {
        let index = this.currentImage % this.IMAGES_WALKING.length;
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