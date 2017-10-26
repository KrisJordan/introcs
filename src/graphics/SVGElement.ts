import Transform from "./Transform";

/**
 * The SVG element is the basis for both Group and Shapes.
 * Every SVG element can be transformed.
 */
export default abstract class SVGElement {

    transform: Transform = Transform.DEFAULT;
    
}