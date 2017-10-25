import Shape from "./Shape";
import Font from "./Font";
import Stroke from "./Stroke";

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
}