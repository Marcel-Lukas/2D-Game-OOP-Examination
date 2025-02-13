class Level {
    enemies;
    clouds;
    backgroundObjects;
    endBoss;
    
    levelEndX = 5622;
    levelStartX = 222;

    
    constructor(enemies, clouds, backgroundObjects, endBoss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endBoss = endBoss;
    }
}