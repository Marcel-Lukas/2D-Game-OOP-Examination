let level1; 

function initLevel() { 
    level1 = new Level(
        // endBoss =[new Endboss()],
        placedItems = [],
        clouds = [],
        backgroundObjects = []);
        
        createBackgroundObjects();
        createCloudObjects();
}


function createCloudObjects() {
    let repetitions = 20;
    for (let i = 0; i < repetitions; i += 2) {
        this.clouds.push(
            new Cloud("img/5_background/layers/4_clouds/1.png", i * 480),
            new Cloud("img/5_background/layers/4_clouds/2.png", (i + 1) * 480),
        );
    }
}


function createBackgroundObjects() {
    let repetitions = 9;
    for (let i = 0; i < repetitions; i += 2) {
        this.backgroundObjects.push(
            
            new BackgroundObject("img/5_background/layers/air.png", i * 720),
            new BackgroundObject("img/5_background/layers/3_third_layer/1.png", i * 720),
            new BackgroundObject("img/5_background/layers/2_second_layer/1.png", i * 720),
            new BackgroundObject("img/5_background/layers/1_first_layer/1.png", i * 720),

            new BackgroundObject("img/5_background/layers/air.png", (i + 1) * 720),
            new BackgroundObject("img/5_background/layers/3_third_layer/2.png", (i + 1) * 720),
            new BackgroundObject("img/5_background/layers/2_second_layer/2.png", (i + 1) * 720),
            new BackgroundObject("img/5_background/layers/1_first_layer/2.png", (i + 1) * 720)
        );
    }
}