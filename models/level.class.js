class Level {
    enemies;
    clouds;
    backgroundObjects;
    levelEndX = 5080;

    
    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}