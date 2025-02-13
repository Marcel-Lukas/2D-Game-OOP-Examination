class GrenadeAmmunition extends MovableObject{
    height = 50;
    width = 50;
    y = 380;

    // Hitbox
    collisionBoxOffsetY = 5;
    collisionBoxOffsetX = 8;
    collisionBoxWidth = 30;
    collisionBoxHeight = 40;


    constructor(img, x) {
        super().loadImage(img);
        this.x = x;
    }

}