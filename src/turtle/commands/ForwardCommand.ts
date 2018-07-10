import { Command } from "./Command";
import { Context } from "../Context";

const { min, cos, sin } = Math;

export class ForwardCommand extends Command {

    constructor(public amount: number) {
        super();
    }

    execute(context: Context, amount: number): number {
        context.gfx.beginPath();
        let distance = min(amount, this.amount);
        let dx = cos(context.turtle.angle) * distance;
        let dy = sin(context.turtle.angle) * distance;
        context.gfx.lineTo(context.turtle.x, context.turtle.y);
        context.turtle.x += dx;
        context.turtle.y += dy;
        context.gfx.lineTo(context.turtle.x, context.turtle.y);
        context.gfx.stroke();
        this.amount -= distance;
        if (this.amount <= 0) {
            this.done = true;
        }
        return amount - distance;
    }

}