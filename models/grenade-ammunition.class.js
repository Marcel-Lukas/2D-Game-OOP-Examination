class GrenadeAmmunition extends MovableObject{
    height = 50;
    width = 50;
    y = 375;

    collisionBoxOffsetY = 5;
    collisionBoxOffsetX = 8;
    collisionBoxWidth = 30;
    collisionBoxHeight = 40;


    constructor(){
        super().loadImage('img/grenade/grenade-00.png');
        this.x = 420;
    }

}