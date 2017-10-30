import SVGElement from "./SVGElement";

/**
 * A meta-Shape that groups together a collection of "child" Shapes.
 * 
 * When shapes are added to a Group, the entire Group can be
 * transformed all at once. This works similarly to grouping
 * shapes in a drawing program like Illustrator or a presentation
 * program like PowerPoint.
 * 
 * Groups can be nested within other groups.
 */
export default class Group extends SVGElement {

    /**
     * A Group's children are the Shape objects added to the Group.
     */
    children: SVGElement[] = [];

    /**
     * You can construct a Group with as many initial shapes as needed.
     * 
     * @param children Initial Shapes added to the Group.
     */
    constructor(children?: SVGElement[]) {
        super();
        if (children !== undefined) {
            this.children = children;
        }
    }

    toString(): string {
        return `Group - ${this.children.map((o) => o.toString()).join(", ")}`;
    }

    /**
     * Add a Shape objects to the Group's children.
     * 
     * @param child The Shape to add to the Group.
     */
    add(child: SVGElement): void {
        this.children.push(child);
        this.notify();
    }

    /**
     * Remove a Shape object from the Group.
     * 
     * @param child
     */
    remove(child: SVGElement): void {
        this.children = this.children.filter(
            function(e: SVGElement): boolean {
                return e !== child;
            }
        );
        this.notify();
    }

}