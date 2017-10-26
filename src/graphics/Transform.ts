/**
 * Transform allows an SVGElement to be scaled, rotated, and translated
 * from its original positioning. This is incredibly valuable when working
 * with Group elements that contain related Shapes.
 * 
 * The underlying data represents a Matrix as covered in linear algebra.
 * For more information see: 
 * 
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
 */
export default class Transform {

    static DEFAULT: Transform = new Transform();

    private static DEG_TO_RAD: number = 0.0174533;

    private a: number = 1;
    private b: number = 0;
    private c: number = 0;
    private d: number = 1;
    private e: number = 0;
    private f: number = 0;

    copy(): Transform {
        let t: Transform = new Transform();
        t.a = this.a;
        t.b = this.b;
        t.c = this.c;
        t.d = this.d;
        t.e = this.e;
        t.f = this.f;
        return t;
    }

    /**
     * Offsets the Transform by some amount x and y. Returns a new Transform object, does not mutate
     * the Transform object it is called on.
     * 
     * @param x
     * @param y 
     */
    translate(x: number, y?: number): Transform {
        let t: Transform = this.copy();
        t.e = x;
        if (y) {
            t.f = y;
        }
        return t;
    }

    /**
     * Scales the Transform by some x and optional y amount. If no y amount is given the scaling is
     * constant in both dimensions. Returns a new Transform object, does not mutate the Transform
     * object the scale method was called on.
     * 
     * @param x 
     * @param y 
     */
    scale(x: number, y?: number): Transform {
        let t: Transform = this.copy();
        t.a = x;
        if (y === undefined) {
            t.d = x;
        } else {
            t.d = y;
        }
        return t;
    }

    /**
     * Rotates the Transform object by a degrees.
     * 
     * @param a
     */
    rotate(a: number): Transform {
        let t: Transform = this.copy();
        t.a = Math.cos(a * Transform.DEG_TO_RAD);
        t.b = Math.sin(a * Transform.DEG_TO_RAD);
        t.c = -Math.sin(a * Transform.DEG_TO_RAD);
        t.d = Math.cos(a * Transform.DEG_TO_RAD);
        return t;
    }

    /**
     * Helper method used by the transform attribute in the SVG's HTML tag.
     */
    toMatrix(): string {
        return `matrix(${this.a},${this.b},${this.c},${this.d},${this.e},${this.f})`;
    }

}