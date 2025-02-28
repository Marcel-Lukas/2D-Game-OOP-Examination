class Keyboard {
    RIGHT = false;
    LEFT = false;
    SPACE = false;
    SHOOT = false;
    THROW = false;
    ESC = false;

    
    constructor() {
        this.keyboardButtonEvents();
        this.touchButtonEvents();
    }


    keyboardButtonEvents() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "d":
                    keyboard.RIGHT = true;
                    break;
                case "a":
                    keyboard.LEFT = true;
                    break;
        
                case "ArrowRight":
                    keyboard.RIGHT = true;
                    break;
                case "ArrowLeft":
                    keyboard.LEFT = true;
                    break;
        
                case "r":
                    keyboard.SHOOT = true;
                    break;
                case "f":
                    keyboard.THROW = true;
                    break;
        
                case " ":
                    keyboard.SPACE = true;
                    break;
                case "ArrowUp":
                    keyboard.SPACE = true;
                    break;
                case "w":
                    keyboard.SPACE = true;
                    break;
        
                case "Escape":
                    keyboard.ESC = true;
                    if (document.getElementById('absolute-container').classList.contains('d-none')) {
                        fullscreen();
                    }
                    break;
            }
        });

        document.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "d":
                    keyboard.RIGHT = false;
                    break;
                case "a":
                    keyboard.LEFT = false;
                    break;
        
                case "ArrowRight":
                    keyboard.RIGHT = false;
                    break;
                case "ArrowLeft":
                    keyboard.LEFT = false;
                    break;
        
                case "r":
                    keyboard.SHOOT = false;
                    break;
                case "f":
                    keyboard.THROW = false;
                    break;
        
                case " ":
                    keyboard.SPACE = false;
                    break;
                case "ArrowUp":
                    keyboard.SPACE = false;
                    break;
                case "w":
                    keyboard.SPACE = false;
                    break;
        
                case "Escape":
                    keyboard.ESC = false;
                    break;
            }
        });
    }



    touchButtonEvents() {
        document.getElementById("btnRight").addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById("btnRight").addEventListener("touchend", (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });


        document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById("btnLeft").addEventListener("touchend", (e) => {
            e.preventDefault();
            this.LEFT = false;
        });


        document.getElementById("btnShoot").addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.SHOOT = true;
        });
        document.getElementById("btnShoot").addEventListener("touchend", (e) => {
            e.preventDefault();
            this.SHOOT = false;
        });


        document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.THROW = true;
        });
        document.getElementById("btnThrow").addEventListener("touchend", (e) => {
            e.preventDefault();
            this.THROW = false;
        });


        document.getElementById("btnJump").addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById("btnJump").addEventListener("touchend", (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
    }


}