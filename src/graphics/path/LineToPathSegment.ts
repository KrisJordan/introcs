import PointPathSegment from "./PointPathSegment";

export default class LineToPathSegment extends PointPathSegment {

    public toString(): string {
        return `L ${this.x},${this.y}`;
    }

}