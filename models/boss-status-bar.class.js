class BossStatusBar extends DrawableObject{


    IMAGES = [
        'img/bosslifebar/bossLifebar-000.png',
        'img/bosslifebar/bossLifebar-005.png',
        'img/bosslifebar/bossLifebar-010.png',
        'img/bosslifebar/bossLifebar-015.png',
        'img/bosslifebar/bossLifebar-020.png',
        'img/bosslifebar/bossLifebar-025.png',
        'img/bosslifebar/bossLifebar-030.png',
        'img/bosslifebar/bossLifebar-035.png',
        'img/bosslifebar/bossLifebar-040.png',
        'img/bosslifebar/bossLifebar-045.png',
        'img/bosslifebar/bossLifebar-050.png',
        'img/bosslifebar/bossLifebar-055.png',
        'img/bosslifebar/bossLifebar-060.png',
        'img/bosslifebar/bossLifebar-065.png',
        'img/bosslifebar/bossLifebar-070.png',
        'img/bosslifebar/bossLifebar-075.png',
        'img/bosslifebar/bossLifebar-080.png',
        'img/bosslifebar/bossLifebar-085.png',
        'img/bosslifebar/bossLifebar-090.png',
        'img/bosslifebar/bossLifebar-095.png',
        'img/bosslifebar/bossLifebar-100.png'
      ];      
    

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 525;
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

