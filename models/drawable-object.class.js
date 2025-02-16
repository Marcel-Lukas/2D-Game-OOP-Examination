class DrawableObject {

    img;
    imageCache = {};
    currentImage = 0;
    x = 111;
    y = 222;
    height= 111;
    width = 111;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }



    drawFrameCollisionBox(ctx) {
        if (this instanceof Character || this instanceof BrainAlien || 
            this instanceof GreenAlien || this instanceof Endboss || 
            this instanceof ThrowableObject || this instanceof GrenadeAmmunition ||
            this instanceof PistolAmmunition || this instanceof Health ||
            this instanceof ShootableObject) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.collisionBoxOffsetX, this.y + this.collisionBoxOffsetY, 
            this.collisionBoxWidth, this.collisionBoxHeight);
            ctx.stroke();
        } 
    }

    drawFrameOutside(ctx) {
        if (this instanceof Character || this instanceof BrainAlien || 
            this instanceof GreenAlien || this instanceof Endboss || 
            this instanceof ThrowableObject || this instanceof GrenadeAmmunition ||
            this instanceof PistolAmmunition || this instanceof Health ||
            this instanceof ShootableObject) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImages(array){
        array.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    

}