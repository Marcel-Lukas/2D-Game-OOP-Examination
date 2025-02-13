class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    statusBar = new StatusBar();
    bossStatusBar = new BossStatusBar();
    collectedGrenadeBar = new CollectedGrenades();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.runIntervals();
    }


    setWorld() {
        this.character.world = this;
    }


    runIntervals() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 80);
    }


    possibleToThrow() {
        return this.keyboard.THROW && 
        !this.character.lifePoints == 0 && 
        !this.hasThrownGrenade && 
        this.collectedGrenadeBar.collectedGrenades.length > 0;
    }


    checkThrowObjects() {
        if (this.possibleToThrow()) {
            this.hasThrownGrenade = true; 
            let grenade = new ThrowableObject(this.character.x + 80, this.character.y + -20);
            this.throwableObjects.push(grenade);
            this.collectedGrenadeBar.collectedGrenades.pop();
            setTimeout(() => {
                this.hasThrownGrenade = false;
            }, 800);
            this.spliceGrenadeFromArray();
        }
    }

    spliceGrenadeFromArray() {
        for (let i = this.throwableObjects.length - 1; i >= 0; i--) {
            if (this.throwableObjects[i] > 0) {
                this.throwableObjects.splice(i, 1);
            }
        }  
        console.log('Grenades: ' , this.collectedGrenadeBar.collectedGrenades.length);
    }


    
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.lifePoints);
            }
        });
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawMovableObjects();
        this.drawFixedObjects();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    drawMovableObjects(){
        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endBoss);

        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.cameraX, 0);
    }


    drawFixedObjects(){
        this.addToMap(this.statusBar);
        this.addToMap(this.bossStatusBar);
        this.addToMap(this.collectedGrenadeBar);
        
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
