class Level {
    enemies;
    endBoss;
    placedItems;
    clouds;
    backgroundObjects;
    
    levelEndX = 5622;
    levelStartX = 222;

    
    constructor(enemies, endBoss, placedItems, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.endBoss = endBoss;
        this.placedItems = placedItems;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects; 
    }



}