import Shape from "./Shape";

export default class Circle extends Shape {

    r: number;
    cx: number = 0;
    cy: number = 0;

    constructor(radius: number, cx?: number, cy?: number) {
        super();
        this.r = radius;
        if (cx) {
            this.cx = cx;
        }
        if (cy) {
            this.cy = cy;
        }
    }
    
}