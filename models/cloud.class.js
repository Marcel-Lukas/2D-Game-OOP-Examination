class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = 0.4;

        this.y = 18 + Math.random() * 5;
        this.height = 250 + Math.random() * 30;
        this.width = 500 + Math.random() * 60;

        this.animate();
    }
    

    animate() {
        setInterval(() => {
            this.moveLeft();
            if (this.x < level1.levelStartX - 555) {
                this.x = level1.levelEndX + 400;
            }
        }, 1000 / 60);
    }

}
