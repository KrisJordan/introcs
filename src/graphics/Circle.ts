import Shape from "./Shape";

/**
 * This class represents a circle shape. It is made up of a radius,
 * center x, and center y properties.
 */
export default class Circle extends Shape {

    /**
     * The radius of the circle.
     */
    r: number;

    /**
     * The x-coordinate of the circle's center point.
     */
    cx: number = 0;

    /**
     * The y-coordinate of the circle's center point.
     */
    cy: number = 0;

    /**
     * @param radius 
     * @param cx center x-coordinate
     * @param cy center y-coordinate
     */
    constructor(radius: number, cx?: number, cy?: number) {
        super();
        this.r = radius;
        if (cx) {
            this.cx = cx;
        }
        if (cy) {
            this.cy = cy;
        }
    }
    
}