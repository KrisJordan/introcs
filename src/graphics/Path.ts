import Shape from "./Shape";
import PathSegment from "./path/PathSegment";
import MoveToPathSegment from "./path/MoveToPathSegment";
import LineToPathSegment from "./path/LineToPathSegment";
import QuadraticCurveToPathSegment from "./path/QuadraticCurveToPathSegment";
import CubicCurveToPathSegment from "./path/CubicCurveToPathSegment";
import ClosePathSegment from "./path/ClosePathSegment";
import Color from "./Color";

/**
 * A Path is made of a sequence of PathSegments connected by a Stroke.
 * 
 * The Path class has the following helper methods to add segments to a Path.
 * 
 * - [moveTo](#moveto) - lifts and moves "pen" stroke to another point
 * - [lineTo](#lineto) - draws a straight line to a point
 * - [quadraticCurveTo](#quadraticcurveto) - draws a simple curve to a point
 * - [cubicCurveTo](#cubiccurveto) - draws a bezier curve to a point
 * - [close](#close) - connects a stroke from the current point to the Paths' start point. 
 * 
 * Each of these helper methods returns a reference to the same Path object it was called
 * on. This allows you to chain these calls together. For example:
 * 
 * ```
 * let p: Path = new Path(0, 0); 
 * p.lineTo(10, 0).moveTo(0, 0).lineTo(0, 10);
 * ```
 * 
 * By default, a Path has a fill opacity of 0% so its fill will not show up. If you
 * would like to add a Fill color to your Path, be sure to set its fillOpacity to 1.0 for
 * 100% fill opacity.
 * 
 * For more details on SVG Paths, checkout [MDN's Path documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).
 */
export default class Path extends Shape {

    private _segments: PathSegment[] = [];

    fill: Color = Color.BLACK;
    fillOpacity: number = 0;
    
    /**
     * @param x The starting x-coordinate of the Path.
     * @param y The starting y-coordinate of the Path.
     */
    constructor(x: number, y: number) {
        super();
        this.moveTo(x, y);
    }
     
    toString(): string {
        return this._segments.join(" ");
    }

    add(segment: PathSegment): Path {
        this._segments.push(segment);
        this.notify();
        return this;
    }

    /**
     * @param x the x-coordinate of the point to move the "pen" to without drawing a stroke.
     * @param y the y-coordinate of the point to move the "pen" to without drawing a stroke.
     */
    moveTo(x: number, y: number): Path {
        return this.add(new MoveToPathSegment(x, y));
    }

    /**
     * @param x the x-coordinate to draw a line to from the current position of the stroke
     * @param y the y-coordinate to draw a line to from the current position of the stroke
     */
    lineTo(x: number, y: number): Path {
        return this.add(new LineToPathSegment(x, y));
    }
    
    /**
     * Draw a quadratic curve to a specific end point. For more information on how
     * quadratic curves work and to tinker with its control point, see 
     * [this quadratic curve demo](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html).
     * 
     * @param cx control point's x-coordinate
     * @param cy control point's y-coordinate
     * @param x x-coordinate of end point
     * @param y y-coordinate of end point
     */
    quadraticCurveTo(cx: number, cy: number, x: number, y: number): Path {
        return this.add(new QuadraticCurveToPathSegment(cx, cy, x, y));
    }

    /**
     * Draw a cubic, bezier curve to a specific end point. For more information on how
     * quadratic curves work and to tinker with its two control points, see 
     * [this cubic curve demo](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html).
     * 
     * @param cx1 first control point's x-coordinate
     * @param cy1 first control point's y-coordinate
     * @param cx2 second control point's x-coordinate
     * @param cy2 second control point's y-coordinate
     * @param x x-coordinate of end point
     * @param y y-coordinate of end point
     */
    cubicCurveTo(cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number): Path {
        return this.add(new CubicCurveToPathSegment(cx1, cy1, cx2, cy2, x, y));
    }

    /**
     * Close the path by creating a stroke from the current end-point in the Path to the start point of the path.
     */
    close(): Path {
        return this.add(new ClosePathSegment());
    }

	get segments(): PathSegment[]  {
		return this._segments;
	}

	set segments(value: PathSegment[] ) {
        this._segments = value;
        this.notify();
	}
    
}