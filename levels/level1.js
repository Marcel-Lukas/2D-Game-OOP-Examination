let level1;

function initLevel() {

    level1 = new Level(
        [
            // new GreenAlien(1630),
            new GreenAlien(2000),
            // new GreenAlien(2150),
            // new GreenAlien(2600),
            // new BrainAlien(2700),
            // new GreenAlien(3200),
            // new GreenAlien(3450),
            // new GreenAlien(3700),
            // new BrainAlien(3750),
            // new BrainAlien(3850),
            // new GreenAlien(4300),
            // new BrainAlien(4400),
            // new GreenAlien(4800),
            // new GreenAlien(5050),
            // new BrainAlien(5150),
            // new GreenAlien(5250),
            // new BrainAlien(5400),
            // new GreenAlien(5650),
            // new GreenAlien(5800),
            // new GreenAlien(5950),
            // new BrainAlien(6100),
            // new GreenAlien(6280),
            // new BrainAlien(6420),
            // new GreenAlien(6540),
            // new GreenAlien(6700),
            // new BrainAlien(6900),
            new Endboss()
        ],
        [
            new Cloud('img/background/4_clouds/2.png', 300),
            new Cloud('img/background/4_clouds/1.png', 900),
            new Cloud('img/background/4_clouds/2.png', 1500),
            new Cloud('img/background/4_clouds/1.png', 2050),
            new Cloud('img/background/4_clouds/2.png', 2600),
            new Cloud('img/background/4_clouds/1.png', 3200),
            new Cloud('img/background/4_clouds/2.png', 3850),
            new Cloud('img/background/4_clouds/1.png', 4444),
            new Cloud('img/background/4_clouds/2.png', 5100),
            new Cloud('img/background/4_clouds/1.png', 5700),
            new Cloud('img/background/4_clouds/2.png', 6200),
            new Cloud('img/background/4_clouds/1.png', 6800)
        ],
        [
            new GrenadeAmmunition('img/grenade/grenade-00.png', 650),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 700),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 750),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 800),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 1350),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 1600),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 2000),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 2500),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 2570),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 2950),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 3400),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 3900),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 4200),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 4260),
            new GrenadeAmmunition('img/grenade/grenade-00.png', 4644)
        ],
        [
            new PistolAmmunition(280, 382),
            new PistolAmmunition(330, 382),
            new PistolAmmunition(380, 382),
            new PistolAmmunition(430, 382),
            new PistolAmmunition(1250, 200),
            new PistolAmmunition(1860, 200),
            new PistolAmmunition(2250, 220),
            new PistolAmmunition(3100, 200),
            new PistolAmmunition(3640, 200),
            new PistolAmmunition(4780, 200)
        ],
        [
            new Health(545, 220),
            new Health(1100, 200), // zum testen später löschen
            new Health(2700, 170),
            new Health(4400, 220)
        ],
        [
            new BackgroundObject('img/background/air.png', -720),
            new BackgroundObject('img/background/3_third_layer/1.png', -720),
            new BackgroundObject('img/background/2_second_layer/1.png', -720),
            new BackgroundObject('img/background/1_first_layer/1.png', -720),

            new BackgroundObject('img/background/air.png', 0),
            new BackgroundObject('img/background/3_third_layer/2.png', 0),
            new BackgroundObject('img/background/2_second_layer/2.png', 0),
            new BackgroundObject('img/background/1_first_layer/2.png', 0),

            new BackgroundObject('img/background/air.png', 720),
            new BackgroundObject('img/background/3_third_layer/1.png', 720),
            new BackgroundObject('img/background/2_second_layer/1.png', 720),
            new BackgroundObject('img/background/1_first_layer/1.png', 720),

            new BackgroundObject('img/background/air.png', 720 * 2),
            new BackgroundObject('img/background/3_third_layer/2.png', 720 * 2),
            new BackgroundObject('img/background/2_second_layer/2.png', 720 * 2),
            new BackgroundObject('img/background/1_first_layer/2.png', 720 * 2),

            new BackgroundObject('img/background/air.png', 720 * 3),
            new BackgroundObject('img/background/3_third_layer/1.png', 720 * 3),
            new BackgroundObject('img/background/2_second_layer/1.png', 720 * 3),
            new BackgroundObject('img/background/1_first_layer/1.png', 720 * 3),

            new BackgroundObject('img/background/air.png', 720 * 4),
            new BackgroundObject('img/background/3_third_layer/2.png', 720 * 4),
            new BackgroundObject('img/background/2_second_layer/2.png', 720 * 4),
            new BackgroundObject('img/background/1_first_layer/2.png', 720 * 4),

            new BackgroundObject('img/background/air.png', 720 * 5),
            new BackgroundObject('img/background/3_third_layer/1.png', 720 * 5),
            new BackgroundObject('img/background/2_second_layer/1.png', 720 * 5),
            new BackgroundObject('img/background/1_first_layer/1.png', 720 * 5),

            new BackgroundObject('img/background/air.png', 720 * 6),
            new BackgroundObject('img/background/3_third_layer/2.png', 720 * 6),
            new BackgroundObject('img/background/2_second_layer/2.png', 720 * 6),
            new BackgroundObject('img/background/1_first_layer/2.png', 720 * 6),

            new BackgroundObject('img/background/air.png', 720 * 7),
            new BackgroundObject('img/background/3_third_layer/1.png', 720 * 7),
            new BackgroundObject('img/background/2_second_layer/1.png', 720 * 7),
            new BackgroundObject('img/background/1_first_layer/1.png', 720 * 7),

            new BackgroundObject('img/background/air.png', 720 * 8),
            new BackgroundObject('img/background/3_third_layer/2.png', 720 * 8),
            new BackgroundObject('img/background/2_second_layer/2.png', 720 * 8),
            new BackgroundObject('img/background/1_first_layer/2.png', 720 * 8)
        ]
    );

}
