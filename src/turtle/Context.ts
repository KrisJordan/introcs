import { Turtle } from "./Turtle";

export class Context {
    constructor(
        public gfx: CanvasRenderingContext2D, 
        public turtle: Turtle,
        public speed: number
    ) {
        // No-op
    }
}