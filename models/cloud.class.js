class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = 100 + Math.random() * 4000;
        this.y = 18 + Math.random() * 5;

        this.speed = 0.2 + Math.random() * 0.3;
        this.height = 250 + Math.random() * 30;
        this.width = 500 + Math.random() * 60;

        this.animate();
        
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.x < -this.width) {
                this.x = 3000;
            }
        }, 1000 / 60);
    }

}

