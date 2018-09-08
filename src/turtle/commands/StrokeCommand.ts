import { Command } from "./Command";
import { Context } from "../Context";

export class StrokeCommand extends Command {

    constructor(public stroke: string) {
        super();
    }

    execute(context: Context, amount: number): number {
        context.gfx.strokeStyle = this.stroke;
        context.turtle.strokeStyle = this.stroke;
        this.done = true;
        return amount - 1;
    }

}