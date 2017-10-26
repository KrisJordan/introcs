/**
 * Colors are represented by percents red, green, and blue.
 * 
 * These percentages are expressed as values between 0.0 and 1.0.
 * 
 * Black is red: 0, green: 0, blue: 0.
 * White is red: 1, green: 1, blue: 1.
 * 
 * You can use Color objects to fill shapes and create Strokes (outlines)
 * of different colors.
 */
export default class Color {

    /**
     * A constant referring to the color black RGB(0, 0, 0)
     */
    static BLACK: Color = new Color();

    /**
     * A constant referring to the color white RGB(1, 1, 1)
     */
    static WHITE: Color = new Color(1, 1, 1);

    private red: number = 0;
    private green: number = 0;
    private blue: number = 0;

    /**
     * @param red percent red (between 0.0 and 1.0)
     * @param green percent green (between 0.0 and 1.0)
     * @param blue percent blue (between 0.0 and 1.0)
     */
    constructor(red?: number, green?: number, blue?: number) {
        if (red) {
            this.red = red;
        }

        if (green) {
            this.green = green;
        }

        if (blue) {
            this.blue = blue;
        }
    }

    /**
     * Generates a string representation of the color that can be used
     * in HTML and SVG style attributes.
     */
    toRGB(): string {
        return `rgb(${this.red * 100}%, ${this.green * 100}%, ${this.blue * 100}%)`;
    }

}