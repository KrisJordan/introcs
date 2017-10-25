export default class Color {

    static BLACK: Color = new Color();
    static WHITE: Color = new Color(1, 1, 1);

    private red: number = 0;
    private green: number = 0;
    private blue: number = 0;

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

    toRGB(): string {
        return `rgb(${this.red * 100}%, ${this.green * 100}%, ${this.blue * 100}%)`;
    }
}