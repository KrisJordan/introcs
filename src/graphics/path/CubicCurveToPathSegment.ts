import PointPathSegment from "./PointPathSegment";

/**
 * This path segment allows you to add a bezier curve to your Path.
 * 
 * A cubic curve has two control points. The first is at its starting point, the second is at its ending point.
 * For more on cubic curves, see:
 * 
 * [Cubic Curve Demo](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)
 */
export default class CubicCurveToPathSegment extends PointPathSegment {

    private _cx1: number;
    private _cy1: number;
    private _cx2: number;
    private _cy2: number;

    /**
     * @param cx1 x-coordinate of the first control point.
     * @param cy1 y-coordinate of the first control point.
     * @param cx2 x-coodrinate of the second control point.
     * @param cy2 y-coordinate of the second control point.
     * @param x x-coordinate of the end point.
     * @param y y-coordinate of the end point.
     */
    constructor(cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number) {
        super(x, y);
        this._cx1 = cx1;
        this._cy1 = cy1;
        this._cx2 = cx2;
        this._cy2 = cy2;
    }

    public toString(): string {
        return `C ${this._cx1} ${this._cy1}, ${this._cx2} ${this._cy2}, ${this.x} ${this.y}`;
    }

    public get cx1(): number {
        return this._cx1;
    }

    public get cy1(): number {
        return this._cy1;
    }

    public get cx2(): number {
        return this._cx2;
    }

    public get cy2(): number {
        return this._cy2;
    }

}