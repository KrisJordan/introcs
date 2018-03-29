import Transform from "./Transform";

import Observable from "../events/Observable";
import Observer from "../events/Observer";

/**
 * The SVG element is the basis for both Group and Shapes.
 * Every SVG element can be transformed.
 */
export default abstract class SVGElement implements Observable<SVGElement> {

    private _observers: Observer<SVGElement>[] = [];
    private _transform: Transform = Transform.DEFAULT;

    onclick = (event: MouseEvent): void => {}
    ondblclick = (event: MouseEvent): void => {}

    onmousemove = (event: MouseEvent): void => {}
    onmousedown = (event: MouseEvent): void => {}
    onmouseup = (event: MouseEvent): void => {}
    onmouseover = (event: MouseEvent): void => {}
    onmouseout = (event: MouseEvent): void => {}
    
    addObserver(observer: Observer<SVGElement>): void {
        this._observers.push(observer);
    }

    clearObservers(): void {
        this._observers = [];
    }

    removeObserver(observer: Observer<SVGElement>): void {
        this._observers = this._observers.filter((o: Observer<SVGElement>) => o !== observer );
    }

    notify(): void {
        this._observers.forEach((observer: Observer<SVGElement>) => observer(this));
    }

    toString(): string {
        return "SVGElement";
    }

    get transform(): Transform {
        return this._transform;
    }

    set transform(t: Transform) {
        this._transform = t;
        this.notify();
    }

}