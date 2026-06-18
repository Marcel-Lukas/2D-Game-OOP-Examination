/**
 * A base class representing drawable objects in the game world. It provides
 * functionality for loading images, drawing objects on the canvas, and handling
 * collision box outlines.
 */
class DrawableObject {

    img;
    currentImage = 0;
    x = 111;
    y = 222;
    height= 111;
    width = 111;
    imageCache = {};

    /**
     * A shared, class-wide cache of already created `HTMLImageElement`s, keyed by their
     * source path. Because it lives on the class (static) rather than on each instance,
     * identical images (e.g. enemy animation frames used by many instances) are created
     * and downloaded only once and then reused everywhere. This drastically reduces the
     * number of `Image` objects and network requests.
     *
     * @type {Object<string, HTMLImageElement>}
     */
    static sharedImageCache = {};


    /**
     * Returns a cached `HTMLImageElement` for the given path, creating and caching it
     * (in the shared, class-wide cache) on first use. This guarantees that every unique
     * image is instantiated only once across the whole game.
     *
     * @function getCachedImage
     * @param {string} path - The path to the image file.
     * @returns {HTMLImageElement} The cached image element for the given path.
     */
    getCachedImage(path) {
        let cache = DrawableObject.sharedImageCache;
        if (!cache[path]) {
            let img = new Image();
            img.src = path;
            cache[path] = img;
        }
        return cache[path];
    }


    /**
     * Loads a single image from the specified path and assigns it to the `img` property.
     * The image is taken from (or stored in) the shared cache, so it is downloaded only once.
     *
     * @function loadImage
     * @param {string} path - The path to the image file.
     * @returns {void} No return value.
     */
    loadImage(path) {
        this.img = this.getCachedImage(path);
    }


    /**
     * Draws the object's current image on the specified canvas context. If the image fails to load,
     * a warning is logged to the console.
     *
     * @function draw
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context on which to draw.
     * @returns {void} No return value.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(error) {
            console.warn('Error loading image!', error);
            console.log('Could not load image:', this.img.src);
        }
    }


    /**
     * Draws a collision box outline inside the object’s borders, if the object is an instance
     * of one of the listed classes (e.g., Character, BrainAlien, GreenAlien, Endboss, ThrowableObject, Explosion).
     * The outline is transparent by default but can be adjusted for debugging or development purposes.
     *
     * @function drawFrameCollisionBox
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context on which to draw.
     * @returns {void} No return value.
     */
    drawFrameCollisionBox(ctx) {
        if (this instanceof Character || this instanceof BrainAlien || 
            this instanceof GreenAlien || this instanceof Endboss || 
            this instanceof ThrowableObject || this instanceof Explosion) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'transparent'; // Change to a color like 'red' for debugging collision detection!
            ctx.rect(this.x + this.collisionBoxOffsetX, this.y + this.collisionBoxOffsetY, 
            this.collisionBoxWidth, this.collisionBoxHeight);
            ctx.stroke();
        } 
    }

    
    /**
     * Draws an outline around the outer edge of the object’s full width and height,
     * if the object is an instance of one of the listed classes. The outline is transparent
     * by default but can be changed for development.
     *
     * @function drawFrameOutside
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context on which to draw.
     * @returns {void} No return value.
     */
    drawFrameOutside(ctx) {
        if (this instanceof Character || this instanceof BrainAlien || 
            this instanceof GreenAlien || this instanceof Endboss || 
            this instanceof ThrowableObject || this instanceof Explosion) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'transparent'; // Change to a color like 'blue' for marking the outer edge for debugging.
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * Loads an array of image paths into the `imageCache`, creating `HTMLImageElement`s
     * and storing them under their respective paths for later use (e.g., animations).
     *
     * @function loadImages
     * @param {string[]} array - An array of image file paths.
     * @returns {void} No return value.
     */
    loadImages(array){
        array.forEach((path) => {
            this.imageCache[path] = this.getCachedImage(path);
        });
    }


}