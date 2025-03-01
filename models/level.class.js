/**
 * Represents a game level, including enemies, environmental elements,
 * collectible items, and level boundaries.
 */
class Level {

    /**
     * An array of enemy objects present in the level.
     * @type {MovableObject[]}
     */
    enemies;


    /**
     * An array of cloud objects in the level.
     * @type {Cloud[]}
     */
    clouds;


    /**
     * An array of background objects that create the scenery.
     * @type {BackgroundObject[]}
     */
    backgroundObjects;


    /**
     * An array of grenade ammunition pickups available in the level.
     * @type {GrenadeAmmunition[]}
     */
    grenadeAmmunition;


    /**
     * An array of pistol ammunition pickups available in the level.
     * @type {PistolAmmunition[]}
     */
    pistolAmmunition;


    /**
     * An array of health pickups available in the level.
     * @type {Health[]}
     */
    health;


    /**
     * The x-coordinate that marks the end of the level.
     * @type {number}
     * @default 5622
     */
    levelEndX = 5622;


    /**
     * The x-coordinate that marks the start of the level.
     * @type {number}
     * @default 222
     */
    levelStartX = 222;


    /**
     * Creates a new Level instance, initializing its elements such as enemies,
     * clouds, collectible items, and background objects.
     *
     * @constructor
     * @param {MovableObject[]} enemies - An array of enemy objects in the level.
     * @param {Cloud[]} clouds - An array of clouds present in the level.
     * @param {GrenadeAmmunition[]} grenadeAmmunition - An array of grenade ammunition pickups.
     * @param {PistolAmmunition[]} pistolAmmunition - An array of pistol ammunition pickups.
     * @param {Health[]} health - An array of health pickups available in the level.
     * @param {BackgroundObject[]} backgroundObjects - An array of background objects for the level.
     */
    constructor(enemies, clouds, grenadeAmmunition, pistolAmmunition, health, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.grenadeAmmunition = grenadeAmmunition;
        this.pistolAmmunition = pistolAmmunition;
        this.health = health;
        this.backgroundObjects = backgroundObjects; 
    }


}
