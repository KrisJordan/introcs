import Color from "./Color";

/**
 * The styling to use in outlining a shape.
 * 
 * For more details on its individual properties, please see:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
 * 
 * Note that once a Stroke is constructed you cannot change its properties.
 * To obtain a different Stroke style, simply construct a new Stroke object and
 * assign it to a Shape's stroke property instead.
 */
export default class Stroke {
    
    /**
     * The default stroke is has a width of 1 unit and is black.
     */
    static DEFAULT: Stroke = new Stroke(Color.BLACK, 1);

    /**
     * Strokes are commonly undesireable. Use this constant property when
     * you do not want a Shape to have an outline.
     */
    static NONE: Stroke = new Stroke(Color.BLACK, 0);

    private _color: Color = Color.BLACK;
    private _width: number = 1;
    private _linecap: "butt" | "square" | "round" = "round";
    private _linejoin: "miter" | "round" | "bevel" = "round";

    constructor(color?: Color, width?: number, linecap?: "butt" | "square" | "round", linejoin?: "miter" | "round" | "bevel") {
        if (color !== undefined) {
            this._color = color;
        }

        if (width !== undefined) {
            this._width = width;
        }

        if (linecap !== undefined) {
            this._linecap = linecap;
        }
    }

    get color(): Color {
        return this._color;
    }

    get width(): number {
        return this._width;
    }

    get linecap(): "butt" | "square" | "round" {
        return this._linecap;
    }

    get linejoin(): "miter" | "round" | "bevel" {
        return this._linejoin;
    }

}