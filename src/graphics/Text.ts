import Shape from "./Shape";
import Font from "./Font";
import Stroke from "./Stroke";

/**
 * For more information on the Text element's properties, please see:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
 */
export default class Text extends Shape {

    text: string;
    x: number = 0;
    y: number = 0;
    dx: number = 0;
    dy: number = 0;
    textAnchor: string;
    textLength: number;
    lengthAdjust: number;
    font: Font = Font.SANS_SERIF;

    constructor(text: string) {
        super();
        this.stroke = Stroke.NONE;
        this.text = text;
    }

    toString(): string {
        return `Text - "${this.text}"`;
    }
}