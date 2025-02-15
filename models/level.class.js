class Level {
    enemies;
    clouds;
    backgroundObjects;
    grenadeAmmunition;
    pistolAmmunition;
    health;

    levelEndX = 5622;
    levelStartX = 222;

    constructor(enemies, clouds, grenadeAmmunition, pistolAmmunition, health, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.grenadeAmmunition = grenadeAmmunition;
        this.pistolAmmunition = pistolAmmunition;
        this.health = health;
        this.backgroundObjects = backgroundObjects;
        
    }
}
