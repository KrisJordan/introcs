import SVGElement from "./SVGElement";
import Stroke from "./Stroke";
import Color from "./Color";

/**
 * Base class of other shapes that can be filled with a Color and have a Stroke outline.
 * 
 * You cannot construct this class, only classes that extend Shape like Circle, Rectangle, Text, etc.
 */
export default abstract class Shape extends SVGElement {

    private _fill: Color = Color.WHITE;
    
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

    private _stroke: Stroke = Stroke.DEFAULT;

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

}