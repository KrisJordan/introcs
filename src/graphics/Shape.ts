import SVGElement from "./SVGElement";
import Stroke from "./Stroke";
import Color from "./Color";

/**
 * Base class of other shapes that can be filled with a Color and have a Stroke outline.
 * 
 * You cannot construct this class, only classes that extend Shape like Circle, Rectangle, Text, etc.
 */
export default abstract class Shape extends SVGElement {

    private _opacity: number = 1.0;

    private _fill: Color = Color.WHITE;
    private _fillOpacity: number = 1.0;

    private _stroke: Stroke = Stroke.DEFAULT;
    private _strokeOpacity: number = 1.0;

    /**
     * The opacity of the entire Shape.
     */
    public get opacity(): number {
        return this._opacity;
    }

    public set opacity(value: number) {
        this._opacity = value;
        this.notify();
    }

    /**
     * The Color to fill the element with.
     */
    get fill(): Color {
        return this._fill;
    }

    set fill(fill: Color) {
        this._fill = fill;
        this.notify();
    }

    /**
     * The opacity of the just the fill Color.
     */
    get fillOpacity(): number {
        return this._fillOpacity;
    }

    set fillOpacity(value: number) {
        this._fillOpacity = value;
        this.notify();
    }

    /**
     * The Stroke object to outline the element with.
     */
    get stroke(): Stroke {
        return this._stroke;
    }

    set stroke(stroke: Stroke) {
        this._stroke = stroke;
        this.notify();
    }

    /**
     * The opacity of just the Stroke.
     */
    get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    set strokeOpacity(value: number) {
        this._strokeOpacity = value;
        this.notify();
    }

}