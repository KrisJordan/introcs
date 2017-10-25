import Shape from "./Shape";

export default class Group extends Shape {
    
    children: Shape[] = [];

    add(shape: Shape): void {
        this.children.push(shape);
    }

}