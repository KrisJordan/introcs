import Shape from "./Shape";
import Font from "./Font";
import Stroke from "./Stroke";
import Color from "./Color";

/**
 * For more information on the Text element's properties, please see:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
 */
export default class Text extends Shape {

    fill: Color = Color.BLACK;
    stroke: Stroke = Stroke.NONE;

    private _text: string;
    private _x: number = 0;
    private _y: number = 0;
    private _textAnchor: "start" | "middle" | "end" = "start";
    private _textLength: number;
    private _lengthAdjust: "spacing" | "spacingAndGlyphs" = "spacing";
    private _font: Font = Font.SANS_SERIF;

    constructor(text: string) {
        super();
        this.stroke = Stroke.NONE;
        this._text = text;
    }

    toString(): string {
        return `Text - "${this._text}"`;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
        this.notify();
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
        this.notify();
    }


    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
        this.notify();
    }


    get textLength(): number {
        return this._textLength;
    }

    set textLength(value: number) {
        this._textLength = value;
        this.notify();
    }

    get font(): Font {
        return this._font;
    }

    set font(value: Font) {
        this._font = value;
        this.notify();
    }

    get textAnchor(): "start" | "middle" | "end" {
        return this._textAnchor;
    }

    set textAnchor(value: "start" | "middle" | "end") {
        this._textAnchor = value;
        this.notify();
    }

    get lengthAdjust(): "spacing" | "spacingAndGlyphs" {
        return this._lengthAdjust;
    }

    set lengthAdjust(value: "spacing" | "spacingAndGlyphs") {
        this._lengthAdjust = value;
        this.notify();
    }

}