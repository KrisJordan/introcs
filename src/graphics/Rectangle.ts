import Shape from "./Shape";

/**
 * Rectangles have a width and height and are positioned based on their top-left corner's x, y coordinate.
 */
export default class Rectangle extends Shape {
    
    private _width: number;
    private _height: number;
    private _x: number = 0;
    private _y: number = 0;

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

    toString(): string {
        return `Rectangle [${this.width}x${this.height} @ (${this.x},${this.y})]`;
    }

    /**
     * The width of the Rectangle.
     */
    get width():number {
        return this._width;
    }

    set width(w:number) {
        if (w > 0) {
            this._width = w;
            this.notify();
        }
    }

    /**
     * The height of the Rectangle.
     */
    get height():number {
        return this._height;
    }

    set height(h:number) {
        if (h > 0) {
            this._height = h;
            this.notify();
        }
    }

    /**
     * The position of the x-coordinate of the top-left corner of the Rectangle.
     */
    public set x(x: number) {
        this._x = x;
        this.notify();
    }

    public get x(): number {
        return this._x;
    }

    /**
     * The position of the y-coordinate of the top-left corner of the Rectangle.
     */
    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
        this.notify();
    }

    
}