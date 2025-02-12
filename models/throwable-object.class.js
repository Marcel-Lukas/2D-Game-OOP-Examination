class ThrowableObject extends MovableObject{


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
        'img/explosion/explosion-09.png'
    ];

    
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


    constructor(x, y) {
        super().loadImage('img/grenade/grenade-12.png');
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
        this.trow();
    }
    

    trow() {
        this.speedY = 20;
        this.applyGravity();
        setInterval( () => {
            this.x += 16;
        }, 65);
    }




}