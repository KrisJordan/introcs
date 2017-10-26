import SVGElement from "./SVGElement";
import Stroke from "./Stroke";
import Color from "./Color";

/**
 * Base class of other shapes that can be filled with a Color and have a Stroke outline.
 * 
 * You cannot construct this class, only classes that extend Shape like Circle, Rectangle, Text, etc.
 */
export default abstract class Shape extends SVGElement {

    /**
     * The Color to fill the element with.
     */
    fill: Color = Color.WHITE;

    /**
     * The Stroke object to outline the element with.
     */
    stroke: Stroke = Stroke.DEFAULT;

}