/**
 * Represents the game world, handling rendering, object interactions,
 * collision detection, and game state management.
 */
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

    
    /**
     * Creates a new World instance, initializes the rendering context,
     * starts the game loop and intervals for collision checks, and sets
     * up world references for game objects.
     *
     * @constructor
     * @param {HTMLCanvasElement} canvas - The canvas element on which the game is drawn.
     * @param {Keyboard} keyboard - The keyboard input manager.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.runIntervals();
        this.setWorld(this.character);
        this.level.enemies.forEach((enemy) => {
            this.setWorld(enemy);
        });
        this.bossSeen = false;
    }


    /**
     * Assigns this World instance to the world property of the provided object.
     *
     * @param {Object} obj - The object to which the world reference will be assigned.
     * @returns {void} No return value.
     */
    setWorld(obj) {
        obj.world = this;
    }


    /**
     * Sets up a repeated interval to perform various collision checks and game logic,
     * such as checking enemy collisions, throw and shoot actions, and health pickups.
     *
     * @returns {void} No return value.
     */
    runIntervals() {
        setStoppableIverval(() => {
            this.checkEnemyCollisions();
            this.checkThrowObjects();
            this.checkBulletObjects();
            this.checkHealthCollision();
            this.checkPistolAmmunitionCollision();
            this.checkGrenadeAmmunitionCollision();
            this.checkBulletCollisions();
            this.checkGrenadeCollisions();
            this.checkJumpOnEnemy();
        }, 80);
    }


    /**
     * Determines whether the character is allowed to throw a grenade based on
     * keyboard input, character state, and available collected grenades.
     *
     * @returns {boolean} True if throwing is possible; otherwise false.
     */
    possibleToThrow() {
        return this.keyboard.THROW &&
            !this.character.lifePoints == 0 &&
            !this.hasThrownGrenade &&
            this.collectedGrenadeBar.collectedGrenades.length > 0;
    }


    /**
     * Checks if the conditions to throw a grenade are met and, if so, creates
     * a new throwable object, plays a sound, updates the collected grenade count,
     * and resets the throw flag after a delay.
     *
     * @returns {void} No return value.
     */
    checkThrowObjects() {
        if (this.possibleToThrow()) {
            this.hasThrownGrenade = true;
            THROW_SOUND.play();
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


    /**
     * Removes grenade objects from the throwableObjects array by splicing out
     * any element that is greater than 0.
     *
     * @returns {void} No return value.
     */
    spliceGrenadeFromArray() {
        for (let i = this.throwableObjects.length - 1; i >= 0; i--) {
            if (this.throwableObjects[i] > 0) {
                this.throwableObjects.splice(i, 1);
            }
        }
    }


    /**
     * Determines whether the character is allowed to shoot based on
     * keyboard input, character state, and available collected pistol ammunition.
     *
     * @returns {boolean} True if shooting is possible; otherwise false.
     */
    possibleToShoot() {
        return this.keyboard.SHOOT &&
            !this.character.lifePoints == 0 &&
            !this.hasShoot &&
            this.collectedPistolAmmunitionBar.collectedPistolAmmunition.length > 0;
    }


    /**
     * Checks if the conditions to shoot are met and, if so, creates a new bullet object,
     * updates the collected pistol ammunition count, and resets the shoot flag after a delay.
     *
     * @returns {void} No return value.
     */
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


    /**
     * Removes pistol ammunition objects from the shootableObjects array by splicing out
     * any element that is greater than 0.
     *
     * @returns {void} No return value.
     */
    splicePistolAmmunitionFromArray() {
        for (let i = this.shootableObjects.length - 1; i >= 0; i--) {
            if (this.shootableObjects[i] > 0) {
                this.shootableObjects.splice(i, 1);
            }
        }
    }


    /**
     * Checks for collisions between the character and enemies. If a collision
     * occurs and the character is above a certain y-threshold, applies damage to
     * the character and updates the status bar.
     *
     * @returns {void} No return value.
     */
    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.y > 250) {
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.lifePoints);
            }
        });
    }


    /**
     * Checks if the character is jumping on an enemy. If the conditions are met,
     * deals damage to the enemy, plays a sound, propels the character upward,
     * and temporarily prevents multiple jumps on the same enemy.
     *
     * @returns {void} No return value.
     */
    checkJumpOnEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.speedY < 0 && !this.character.jumptOnEnemy) {
                this.character.jumptOnEnemy = true;
                enemy.hit(1);
                JUMP_ALIEN_HIT.play();
                this.character.speedY = 14;
                setTimeout(() => this.character.jumptOnEnemy = false, 1444);
            }
        });
    }


    /**
     * Removes a specific item from an array after a specified delay.
     *
     * @param {Array} arr - The array from which the item will be removed.
     * @param {*} item - The item to be removed.
     * @param {number} delay - The delay in milliseconds before removal.
     * @returns {void} No return value.
     */
    removeAfterDelay(arr, item, delay) {
        setTimeout(() => {
            const i = arr.indexOf(item);
            if (i !== -1) arr.splice(i, 1);
        }, delay);
    }


    /**
     * Checks for collisions between bullets and enemies. When a collision is detected,
     * applies damage to the enemy, plays a sound, and removes the bullet after a short delay.
     * Also updates the boss status bar if the enemy is an Endboss.
     *
     * @returns {void} No return value.
     */
    checkBulletCollisions() {
        this.level.enemies.forEach(enemy => {
            this.shootableObjects.forEach(bullet => {
                if (!bullet.isColliding(enemy)) return;
                enemy.hit(50);
                ALIEN_HURT_SOUND.play();
                this.removeAfterDelay(this.shootableObjects, bullet, 40);
                if (enemy.lifePoints <= 0 && !(enemy instanceof Endboss)) {
                    this.removeAfterDelay(this.level.enemies, enemy, 444);
                }
                if (enemy instanceof Endboss) {
                    this.bossStatusBar.setPercentage(enemy.lifePoints);
                }
            });
        });
    }


    /**
     * Checks for collisions between grenade explosions and enemies. For each collision,
     * ensures that the enemy is only hit once per explosion, and applies damage and sound.
     *
     * @returns {void} No return value.
     */
    checkGrenadeCollisions() {
        this.level.enemies.forEach(enemy => this.explosions.forEach(detonation => {
            if (!detonation.isColliding(enemy)) return;
            if (!detonation.alreadyHit) detonation.alreadyHit = new Set();
            if (detonation.alreadyHit.has(enemy)) return;
            this.handleGrenadeHit(detonation, enemy);
        }));
    }


    /**
     * Handles the effect of a grenade explosion on an enemy by applying damage,
     * playing a sound, and updating the boss status bar if the enemy is an Endboss.
     *
     * @param {Explosion} detonation - The explosion object causing the damage.
     * @param {MovableObject} enemy - The enemy object that was hit.
     * @returns {void} No return value.
     */
    handleGrenadeHit(detonation, enemy) {
        enemy.hit(334);
        ALIEN_HURT_SOUND.play();
        detonation.alreadyHit.add(enemy);
        if (enemy.lifePoints <= 0 && !(enemy instanceof Endboss)) {
            this.removeAfterDelay(this.level.enemies, enemy, 444);
        }
        if (enemy instanceof Endboss) {
            this.bossStatusBar.setPercentage(enemy.lifePoints);
        }
    }


    /**
     * Checks for collisions between the character and health pickups.
     * If a collision occurs, restores the character's life, plays a sound,
     * updates the status bar, and removes the health pickup from the level.
     *
     * @returns {void} No return value.
     */
    checkHealthCollision() {
        this.level.health.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.character.lifePoints = 100;
                PICK_UP_HEALTH_SOUND.play();
                this.statusBar.setPercentage(this.character.lifePoints);
                this.deletePlacedItems(item, 'health');
            }
        });
    }


    /**
     * Checks for collisions between the character and pistol ammunition pickups.
     * If a collision occurs, adds multiple instances of the pickup to the
     * collected pistol ammunition bar, plays a sound, and removes the pickup from the level.
     *
     * @returns {void} No return value.
     */
    checkPistolAmmunitionCollision() {
        this.level.pistolAmmunition.forEach((item) => {
            if (this.character.isColliding(item)) {
                for (let i = 0; i < 6; i++) {
                    this.collectedPistolAmmunitionBar.collectedPistolAmmunition.push(item);
                }
                PICK_UP_PISTOL_AMMO_SOUND.play();
                this.deletePlacedItems(item, 'pistolAmmunition');
            }
        });
    }


    /**
     * Checks for collisions between the character and grenade ammunition pickups.
     * If a collision occurs, adds the pickup to the collected grenade bar, plays a sound,
     * and removes the pickup from the level.
     *
     * @returns {void} No return value.
     */
    checkGrenadeAmmunitionCollision() {
        this.level.grenadeAmmunition.forEach((item) => {
            if (this.character.isColliding(item)) {
                this.collectedGrenadeBar.collectedGrenades.push(item);
                PICK_UP_NADE_AMMO_SOUND.play();
                this.deletePlacedItems(item, 'grenadeAmmunition');
            }
        });
    }


    /**
     * Removes a specific item from the level's array of placed items based on the given array name.
     *
     * @param {*} item - The item to be removed.
     * @param {string} arrayName - The name of the array in the level object from which the item should be removed.
     * @returns {void} No return value.
     */
    deletePlacedItems(item, arrayName) {
        const items = this.level[arrayName];
        if (!items) return;
        let index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }


    /**
     * Clears the canvas, draws all movable and fixed objects, and schedules the next
     * frame using requestAnimationFrame.
     *
     * @returns {void} No return value.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawMovableObjects();
        this.drawFixedObjects();
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    /**
     * Draws all movable objects in the game world by applying camera translation,
     * adding background objects, pickups, enemies, and dynamic objects, and finally drawing the character.
     *
     * @returns {void} No return value.
     */
    drawMovableObjects() {
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


    /**
     * Draws fixed objects such as the status bar, boss status bar (if applicable),
     * and collected ammunition bars.
     *
     * @returns {void} No return value.
     */
    drawFixedObjects() {
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


    /**
     * Displays the boss status bar by adding it to the map.
     *
     * @returns {*} The result of adding the boss status bar to the map.
     */
    showBossStatusBar() {
        return this.addToMap(this.bossStatusBar);
    }


    /**
     * Iterates over an array of objects and adds each object to the map using {@link addToMap}.
     *
     * @param {Object[]} objects - An array of objects to be added to the map.
     * @returns {void} No return value.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * Adds a movable object to the canvas. If the object is facing left (otherDirection is true),
     * the function applies a mirror transformation; otherwise, it draws the object normally.
     *
     * @param {MovableObject} mo - The movable object to be drawn.
     * @returns {void} No return value.
     */
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
