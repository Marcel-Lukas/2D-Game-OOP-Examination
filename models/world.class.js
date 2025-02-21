class World {
    
    character = new Character();
    bullet = new ShootableObject();
    detonation = new Explosion();
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
    explosions = [];


    pickUpPistolAmmoSound = new Audio('audio/pick-pistol-ammo.mp3');
    pickUpNadeAmmoSound = new Audio('audio/pick-nade-ammo.mp3');
    pickUpHealthSound = new Audio('audio/collect.mp3');
    alienHurtSound = new Audio('audio/alien-hurt-Sound.mp3');
    throwSound = new Audio('audio/throw.mp3');
    gameSound = new Audio('audio/gameSound.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        
        this.runIntervals();

        this.setWorld(this.character);

        this.level.enemies.forEach((enemy) =>{
            this.setWorld(enemy);
        });

        this.bossSeen = false;
    }


    setWorld(obj) {
        obj.world = this;
    }


    runIntervals() {
        setInterval(() => {
            this.checkEnemyCollisions();
            this.checkThrowObjects();
            this.checkBulletObjects();
            this.checkHealthCollision();
            this.checkPistolAmmunitionCollision();
            this.checkGrenadeAmmunitionCollision();
            this.checkBulletCollisions();
            this.checkGrenadeCollisions();
            this.timeForMusic();
        }, 80);
    }


    timeForMusic() {
        if (this.character.x >= 1031) {
            playSound(this.gameSound, 0.2);
        }
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
            playSound(this.throwSound, 0.5);
            let grenade = new ThrowableObject(this.character.x + 80, this.character.y + -20);
            this.setWorld(grenade);
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
    }

// ##################
    
    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.lifePoints);
            }
        });
    }


    removeAfterDelay(arr, item, delay) {
        setTimeout(() => {
          const i = arr.indexOf(item);
          if (i !== -1) arr.splice(i, 1);
        }, delay);
      }


    checkBulletCollisions() {
        this.level.enemies.forEach(enemy => {
          this.shootableObjects.forEach(bullet => {
            if (!bullet.isColliding(enemy)) return;
            enemy.hit(50);
            playSound(this.alienHurtSound, 0.15);
            if (enemy.lifePoints <= 0) this.removeAfterDelay(this.level.enemies, enemy, 444);
            this.removeAfterDelay(this.shootableObjects, bullet, 40);
          });
        });
      }
    

    checkGrenadeCollisions() {
        this.level.enemies.forEach(enemy => this.explosions.forEach(detonation => {
          if (!detonation.isColliding(enemy)) return;
          if (!detonation.alreadyHit) detonation.alreadyHit = new Set();
          if (detonation.alreadyHit.has(enemy)) return;
          this.handleGrenadeHit(detonation, enemy);
        }));
      }
      

    handleGrenadeHit(detonation, enemy) {
        enemy.hit(334);
        playSound(this.alienHurtSound, 0.3);
        detonation.alreadyHit.add(enemy);
        if (enemy.lifePoints <= 0) {
            this.removeAfterDelay(this.level.enemies, enemy, 444);
        }
    }
      

    checkHealthCollision() {
        this.level.health.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.character.lifePoints = 100;
                playSound(this.pickUpHealthSound, 0.5);
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
                playSound(this.pickUpPistolAmmoSound, 0.3);
                this.deletePlacedItems(item, 'pistolAmmunition');
            }
        });
    }

    
    checkGrenadeAmmunitionCollision() {
        this.level.grenadeAmmunition.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.collectedGrenadeBar.collectedGrenades.push(item);
                playSound(this.pickUpNadeAmmoSound, 0.6);
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
        this.addObjectsToMap(this.explosions);

        this.addToMap(this.character);

        this.ctx.translate(-this.cameraX, 0);
    }


    drawFixedObjects(){
        this.addToMap(this.statusBar);

        if (!this.bossSeen && this.character.x > 4900) {
            this.bossSeen = true;
        }

        if (this.bossSeen) {
            this.showBossStatusBar();
        }
        
        this.addToMap(this.collectedGrenadeBar);
        this.addToMap(this.collectedPistolAmmunitionBar); 
    }

    
    showBossStatusBar() {
        return this.addToMap(this.bossStatusBar);
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
