class GrenadeAmmunition extends MovableObject{
    height = 50;
    width = 50;


    constructor(img, x, y){
        super().loadImage(img);
        this.x = x;
        this.y = y;
    }

}