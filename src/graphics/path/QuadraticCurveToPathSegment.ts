import PointPathSegment from "./PointPathSegment";

/**
 * This path segment allows you to add a simple curve to your Path.
 * 
 * A quadratic curve has a control point that it uses to create a curve towards as it moves
 * toward its end point. For more on quadratic curves, see:
 * 
 * [Quadratic Curve Demo](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)
 */
export default class QuadraticCurveToPathSegment extends PointPathSegment {

    private _cx: number;
    private _cy: number;

    /**
     * @param cx the x-coordinate of the control point.
     * @param cy the y-coordinate of the control point.
     * @param x the x-coordinate of the end point.
     * @param y the y-coordinate of the end point.
     */
	constructor(cx: number, cy: number, x: number, y: number) {
        super(x, y);
		this._cx = cx;
		this._cy = cy;
	}    

    public toString(): string {
        return `Q ${this._cx} ${this._cy}, ${this.x} ${this.y}`;
    }

	public get cx(): number {
		return this._cx;
	}

	public get cy(): number {
		return this._cy;
	}

}