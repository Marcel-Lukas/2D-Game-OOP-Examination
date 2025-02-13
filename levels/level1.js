let level1;


function initLevel() {

    level1 = new Level(
        
        [
            new GrenadeAmmunition(),
            // new GreenAlien(),
            // new GreenAlien(),
            // new BrainAlien(),
            // new GreenAlien(),
            // new BrainAlien(),
            // new GreenAlien(),
            // new GreenAlien(),
            // new BrainAlien(),
            // new BrainAlien(),
            // new BrainAlien(),
            new Endboss()
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud()
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -720),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -720),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -720),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -720),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 720),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 720 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 720 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 720 * 2),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 720 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 720 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 720 * 4),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720 * 5),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 720 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 720 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 720 * 6),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720 * 7),

            new BackgroundObject('img/5_background/layers/air.png', 720 * 8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 720 * 8),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 720 * 8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 720 * 8)
        ],

        // placedNades = [],
        
        
    );

    

    // function createGrenadeAmmunition() {
    //     let repetitions = 5;
    //     let offset = 1000;
    //     for (let i = 0; i < repetitions; i +=2) {
    //         this.placedNades.push (
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+1) * offset, 380),
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+1) * offset + 150, 380),
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+1) * offset + 225, 380),
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+1.8) * offset, 380),
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+2.25) * offset + 150, 380),
    //             new GrenadeAmmunition('img/grenade/grenade-00.png', (i+1.95) * offset + 225, 380)
    //         )
    //     }
    // }
    
    // createGrenadeAmmunition();



}
