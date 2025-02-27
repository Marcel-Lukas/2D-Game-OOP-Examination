class Ufo extends MovableObject {
    y = 90;
    height = 50;
    width = 120;
    floatOffset = 0;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.setRandomSpeed();
        this.animate();
    }

    setRandomSpeed() {
        this.speed = -8 - Math.random() * 7;
    }

    animate() {
        setStoppableIverval(() => {
            this.moveLeft();
            this.y = 90 + Math.sin(this.floatOffset) * 22;
            this.floatOffset += 0.1;

            if (this.x > level1.levelEndX + 1000) {
                this.x = level1.levelStartX - 1000;
                this.setRandomSpeed();
            }
        }, 1000 / 60);
    }
}
