class GrenadeAmmunition extends MovableObject{
    height = 50;
    width = 50;
    y = 376;

    // Hitbox
    collisionBoxOffsetY = -4;
    collisionBoxOffsetX = -4;
    collisionBoxWidth = 58;
    collisionBoxHeight = 58;


    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
    }


}