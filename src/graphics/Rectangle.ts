import Shape from "./Shape";

/**
 * Rectangles have a width and height and are positioned based on their top-left corner's x, y coordinate.
 */
export default class Rectangle extends Shape {

    /**
     * The width of the Rectangle.
     */
    width: number;

    /**
     * The height of the Rectangle.
     */
    height: number;

    /**
     * The position of the x-coordinate of the top-left corner of the Rectangle.
     */
    x: number = 0;

    /**
     * The position of the y-coordinate of the top-left corner of the Rectangle.
     */
    y: number = 0;

    constructor(width: number, height: number, x?: number, y?: number) {
        super();
        this.width = width;
        this.height = height;
        if (x) {
            this.x = x;
        }
        if (y) {
            this.y = y;
        }
    }
    
}