class Level {
    enemies;
    clouds;
    backgroundObjects;

    levelEndX = 5622;
    levelStartX = 222;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}
