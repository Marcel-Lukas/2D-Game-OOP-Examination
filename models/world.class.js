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
    collectedPistolAmmunitionBar = new CollectedPistolAmmunition();
    throwableObjects = [];
    shootableObjects = [];


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
            this.checkEnemyCollisions();
            this.checkThrowObjects();
            this.checkBulletObjects();
            this.checkHealthCollision();
            this.checkPistolAmmunitionCollision();
            this.checkGrenadeAmmunitionCollision();
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
        console.log('Grenades: ', this.collectedGrenadeBar.collectedGrenades.length);
    }


// ##################

    possibleToShoot() {
        return this.keyboard.SHOOT && 
        !this.character.lifePoints == 0 &&
        !this.hasShoot &&
        this.collectedPistolAmmunitionBar.collectedPistolAmmunition.length > 0;
    }

    checkBulletObjects() {
        if (this.possibleToShoot()) {
            this.hasShoot = true; 
            let bullet = new ShootableObject(this.character.x + 54, this.character.y + 40);
            this.shootableObjects.push(bullet);
            this.collectedPistolAmmunitionBar.collectedPistolAmmunition.pop();
            setTimeout(() => {
                this.hasShoot = false;
            }, 333);
            this.splicePistolAmmunitionFromArray();
        }
    }

    splicePistolAmmunitionFromArray() {
        for (let i = this.shootableObjects.length - 1; i >= 0; i--) {
            if (this.shootableObjects[i] > 0) {
                this.shootableObjects.splice(i, 1);
            }
        }  
        console.log('Pistol Ammunition: ', this.collectedPistolAmmunitionBar.collectedPistolAmmunition.length);
    }

// ##################
    
    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.lifePoints);
            }
        });
    }


    checkHealthCollision() {
        this.level.health.forEach((item) => {
            if (this.character.isColliding(item) && this.character.lifePoints < 100) {
                this.character.lifePoints = 100;
                this.statusBar.setPercentage(this.character.lifePoints);
                this.deletePlacedItems(item, 'health');
            }
        });
    }
    

    checkPistolAmmunitionCollision() {
        this.level.pistolAmmunition.forEach((item) => {
            if (this.character.isColliding(item)) {
                for (let i = 0; i < 6; i++) {
                    this.collectedPistolAmmunitionBar.collectedPistolAmmunition.push(item);
                }
                this.deletePlacedItems(item, 'pistolAmmunition');
            }
        });
    }
    
    
    checkGrenadeAmmunitionCollision() {
        this.level.grenadeAmmunition.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.collectedGrenadeBar.collectedGrenades.push(item);
                this.deletePlacedItems(item, 'grenadeAmmunition');
            }
        });
    }
    

    deletePlacedItems(item, arrayName) {
        const items = this.level[arrayName]; 
        if (!items) return;
    
        let index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }
    
    // ##################

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
        this.addObjectsToMap(this.level.grenadeAmmunition);
        this.addObjectsToMap(this.level.pistolAmmunition);
        this.addObjectsToMap(this.level.health);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.shootableObjects);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.cameraX, 0);
    }


    drawFixedObjects(){
        this.addToMap(this.statusBar);
        this.addToMap(this.bossStatusBar);
        this.addToMap(this.collectedGrenadeBar);
        this.addToMap(this.collectedPistolAmmunitionBar);
        
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    
    addToMap(mo) {
        if (!mo.otherDirection) {
            mo.draw(this.ctx);
            mo.drawFrameCollisionBox(this.ctx);
            mo.drawFrameOutside(this.ctx);
        } else {
            this.ctx.save();
            this.ctx.translate(mo.x + mo.width, mo.y);
            this.ctx.scale(-1, 1);
            let oldX = mo.x;
            let oldY = mo.y;
            mo.x = 0;
            mo.y = 0;
            mo.draw(this.ctx);
            mo.drawFrameCollisionBox(this.ctx);
            mo.drawFrameOutside(this.ctx);
            mo.x = oldX;
            mo.y = oldY;
            this.ctx.restore();
        }
    }
    
    
    



}
