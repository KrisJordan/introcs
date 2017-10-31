import Shape from "./Shape";

/**
 * This class represents a circle shape. It is made up of a radius,
 * center x, and center y properties.
 */
export default class Circle extends Shape {

    private _r: number;
    private _cx: number = 0;
    private _cy: number = 0;

    /**
     * @param radius 
     * @param cx center x-coordinate
     * @param cy center y-coordinate
     */
    constructor(radius: number, cx?: number, cy?: number) {
        super();
        this._r = radius;
        if (cx) {
            this._cx = cx;
        }
        if (cy) {
            this._cy = cy;
        }
    }

    toString(): string {
        return `Circle [r=${this.r} @ (${this.cx},${this.cy})]`;
    }

    /**
     * The radius of the circle.
     */
    get r(): number {
        return this._r;
    }

    set r(r: number) {
        if (r > 0) {
            this._r = r;
            this.notify();
        }
    }

    
    /**
     * The x-coordinate of the circle's center point.
     */
    get cx(): number {
        return this._cx;
    }

    set cx(cx: number) {
        this._cx = cx;
        this.notify();
    }

    /**
     * The y-coordinate of the circle's center point.
     */
    get cy(): number {
        return this._cy;
    }

    set cy(cy: number) {
        this._cy = cy;
        this.notify();
    }
    
}