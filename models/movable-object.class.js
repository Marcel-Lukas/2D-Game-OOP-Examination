class MovableObject {
    x = 120;
    y = 290;
    height= 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array){
        array.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(images) {
        // Walk animation
        let index = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 = 1, Rest 1    i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0 ....
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x  -=this.speed;
        },1000 / 60);
    }
}