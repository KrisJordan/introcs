import Shape from "./Shape";

export default class Rectangle extends Shape {

    width: number;
    height: number;
    x: number = 0;
    y: number = 0;

    constructor(width: number, height: number, x?: number, y?: number) {
        super();
        this.width = width;
        this.height = height;
        if (x) {
            this.x = x;
        }
        if (y) {
            this.y = y;
        }
    }
    
}