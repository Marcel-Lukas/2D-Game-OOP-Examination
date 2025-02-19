class ThrowableObject extends MovableObject{
    world;
    height = 55;
    width = 55;

    // Hitbox
    collisionBoxOffsetY = 0;
    collisionBoxOffsetX = 0;
    collisionBoxWidth = 55;
    collisionBoxHeight = 55;

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
        'img/explosion/explosion-09.png',
        'img/explosion/explosion-10.png'
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


    constructor(x, y, speed) {
        super().loadImage('img/grenade/grenade-12.png');
        this.loadImages(this.IMAGES_EXPLOSION);
        this.loadImages(this.IMAGES_ROTATION);

        this.x = x;
        this.y = y;

        this.speed = speed;
        this.speedY = 20;

        this.applyGravity();
        this.throw();
    }
    

    throw() {
        let throwDirection = MovableObject.throwOtherDirection;

        setInterval(() => {
            this.throwAndAnimateGrenade(throwDirection); 
        }, 65)
    }



    // throwAndAnimateGrenade(throwDirection) {
    //     let delay = 70;
    //     if (throwDirection === false) {
    //         this.x += 16;
    //         this.playAnimation(this.IMAGES_ROTATION);
    
    //         if (this.y >= 358 && !this.hasExploded) {
    //             let exp = new Explosion(this.x -110);
    //             this.world.explosions.push(exp);
    //             this.hasExploded = true;
    
    //             let index = this.world.throwableObjects.indexOf(this);
    //             if (index !== -1) {
    //                 setTimeout(() => {
    //                     this.world.throwableObjects.splice(index, 1);
    //                 }, delay);
    //             }

    //             let i = this.world.explosions.indexOf(this);
    //             if (this.hasExploded === true) {
    //                 setTimeout(() => {
    //                     this.world.explosions.splice(i, 1);
    //                 }, 888);
    //             }
    //         }
    //     } else {
    //         this.x -= 16;
    //         this.playAnimation(this.IMAGES_ROTATION);
    
    //         if (this.y >= 358 && !this.hasExploded) {
    //             let exp = new Explosion(this.x -100);
    //             this.world.explosions.push(exp);
    //             this.hasExploded = true;
    
    //             let index = this.world.throwableObjects.indexOf(this);
    //             if (index !== -1) {
    //                 setTimeout(() => {
    //                     this.world.throwableObjects.splice(index, 1);
    //                 }, delay);
    //             }

    //             let i = this.world.explosions.indexOf(this);
    //             if (this.hasExploded === true) {
    //                 setTimeout(() => {
    //                     this.world.explosions.splice(i, 1);
    //                 }, 888);
    //             }
    //         }
    //     }
    // }
    



    // throwAndAnimateGrenade(throwDirection) {
    //     this.move(throwDirection);
    //     if (this.y < 358 || this.hasExploded) return;
    //     const e = this.explode(throwDirection ? -100 : -110);
    //     this.removeItem(this.world.throwableObjects, this, 70);
    //     this.removeItem(this.world.explosions, e, 888);
    //   }

    //   move(throwDirection) {
    //     this.x += throwDirection ? -16 : 16;
    //     this.playAnimation(this.IMAGES_ROTATION);
    //   }

    //   explode(offset) {
    //     const exp = new Explosion(this.x + offset);
    //     this.hasExploded = true;
    //     this.world.explosions.push(exp);
    //     return exp;
    //   }

    //   removeItem(arr, item, delay) {
    //     const i = arr.indexOf(item);
    //     if (i !== -1) setTimeout(() => arr.splice(i, 1), delay);
    //   }

    

    
    throwAndAnimateGrenade(throwDirection) {
        this.x += throwDirection ? -16 : 16;
        this.playAnimation(this.IMAGES_ROTATION);
        if (this.y < 358 || this.hasExploded) return;
        const explosion = new Explosion(this.x + (throwDirection ? -100 : -110));
        this.world.explosions.push(explosion);
        this.hasExploded = true;
        this.removeItem(this.world.throwableObjects, this, 70);
        this.removeItem(this.world.explosions, explosion, 888);
      }

      removeItem(arr, item, delay) {
        const i = arr.indexOf(item);
        if (i !== -1) setTimeout(() => arr.splice(i, 1), delay);
      }
      
      
      
    






}