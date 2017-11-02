import Shape from "./Shape";

export default class Line extends Shape {

    private _x1: number;
    private _y1: number;
    private _x2: number;
    private _y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }

    get x1(): number {
        return this._x1;
    }

    set x1(x1: number) {
        this._x1 = x1;
        this.notify();
    }

    get y1(): number {
        return this._y1;
    }

    set y1(y1: number) {
        this._y1 = y1;
        this.notify();
    }

    get x2(): number {
        return this._x2;
    }

    set x2(x2: number) {
        this._x2 = x2;
        this.notify();
    }

    get y2(): number {
        return this._y2;
    }

    set y2(y2: number) {
        this._y2 = y2;
    }

}