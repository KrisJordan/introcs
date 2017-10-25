import Color from "./Color";

export default class Stroke {
    
    static DEFAULT: Stroke = new Stroke();
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