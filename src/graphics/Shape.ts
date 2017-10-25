import Transform from "./Transform";
import Stroke from "./Stroke";
import Color from "./Color";

export default class Shape {
    transform: Transform = Transform.DEFAULT;
    stroke: Stroke = Stroke.DEFAULT;
    fill: Color = Color.WHITE;
}