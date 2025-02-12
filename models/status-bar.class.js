class StatusBar extends DrawableObject{


    IMAGES = [
        'img/lifebar/lifebar-000.png',
        'img/lifebar/lifebar-005.png',
        'img/lifebar/lifebar-010.png',
        'img/lifebar/lifebar-015.png',
        'img/lifebar/lifebar-020.png',
        'img/lifebar/lifebar-025.png',
        'img/lifebar/lifebar-030.png',
        'img/lifebar/lifebar-035.png',
        'img/lifebar/lifebar-040.png',
        'img/lifebar/lifebar-045.png',
        'img/lifebar/lifebar-050.png',
        'img/lifebar/lifebar-055.png',
        'img/lifebar/lifebar-060.png',
        'img/lifebar/lifebar-065.png',
        'img/lifebar/lifebar-070.png',
        'img/lifebar/lifebar-075.png',
        'img/lifebar/lifebar-080.png',
        'img/lifebar/lifebar-085.png',
        'img/lifebar/lifebar-090.png',
        'img/lifebar/lifebar-095.png',
        'img/lifebar/lifebar-100.png'
    ];
    

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 8;
        this.y = 5;
        this.width = 190;
        this.height = 40;
        this.setPercentage(100);
    }


    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        let index = Math.floor(this.percentage / 5);
        if (index < 0) index = 0;
        if (index > 20) index = 20;
    
        return index;
    }


}

