import PointPathSegment from "./PointPathSegment";

export default class MoveToPathSegment extends PointPathSegment {
    public toString(): string {
        return `M ${this.x},${this.y}`;
    }
}