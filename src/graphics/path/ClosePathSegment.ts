import PathSegment from "./PathSegment";

export default class ClosePathSegment extends PathSegment {
    public toString(): string {
        return "Z";
    }
}