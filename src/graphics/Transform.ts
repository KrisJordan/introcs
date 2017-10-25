export default class Transform {

    static DEFAULT: Transform = new Transform();
    static RADIANS: number = 0.0174533;

    a: number = 1;
    b: number = 0;
    c: number = 0;
    d: number = 1;
    e: number = 0;
    f: number = 0;

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

    translate(x: number, y?: number): Transform {
        let t: Transform = this.copy();
        t.e = x;
        if (y) {
            t.f = y;
        }
        return t;
    }

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

    rotate(a: number): Transform {
        let t: Transform = this.copy();
        t.a = Math.cos(a * Transform.RADIANS);
        t.b = Math.sin(a * Transform.RADIANS);
        t.c = -Math.sin(a * Transform.RADIANS);
        t.d = Math.cos(a * Transform.RADIANS);
        return t;
    }

    toMatrix(): string {
        return `matrix(${this.a},${this.b},${this.c},${this.d},${this.e},${this.f})`;
    }

}