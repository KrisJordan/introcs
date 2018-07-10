import { Command } from "./Command";
import { Context } from "../Context";

export class MoveToCommand extends Command {
    constructor(public x: number, public y: number) {
        super();
    }

    execute(context: Context, amount: number): number {
        context.gfx.moveTo(this.x, this.y);
        context.turtle.x = this.x;
        context.turtle.y = this.y;
        this.done = true;
        return amount;
    }
}