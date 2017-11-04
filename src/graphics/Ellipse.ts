import Shape from "./Shape";

/**
 * Ellipse, like circle, is based on an x and y center point. Unlike circle, it has separate properties
 * for radius of x (across its width) and y (across its height). To rotate an ellipse, you must specify 
 * a transform.
 */
export default class Ellipse extends Shape {

    private _cx: number;
    private _cy: number;
    private _rx: number;
    private _ry: number;

    constructor(cx: number, cy: number, rx: number, ry: number) {
        super();
        this._cx = cx;
        this._cy = cy;
        this._rx = rx;
        this._ry = ry;
    }

    get cx(): number {
        return this._cx;
    }

    set cx(value: number) {
        this._cx = value;
    }

    get cy(): number {
        return this._cy;
    }

    set cy(value: number) {
        this._cy = value;
    }

    get rx(): number {
        return this._rx;
    }

    set rx(value: number) {
        this._rx = value;
    }

    get ry(): number {
        return this._ry;
    }

    set ry(value: number) {
        this._ry = value;
    }


}