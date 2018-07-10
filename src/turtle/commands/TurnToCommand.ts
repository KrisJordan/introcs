import { Command } from "./Command";
import { Context } from "../Context";

export class TurnToCommand extends Command {
    constructor(public angle: number) {
        super();
    }

    execute(context: Context, amount: number): number {
        context.turtle.angle = this.angle;
        this.done = true;
        return amount;
    }
}