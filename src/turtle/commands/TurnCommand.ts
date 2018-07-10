import { Command } from "./Command";
import { Context } from "../Context";

const {abs, min} = Math;

export class TurnCommand extends Command {
    constructor(public amount: number) {
        super();
    }

    execute(context: Context, amount: number): number {
        let sign = this.amount / abs(this.amount);
        let dr = min(this.amount * sign, amount);

        if (sign < 0) {
            // counter clockwise
            context.turtle.angle += dr;
            this.amount += dr;
            if (this.amount >= 0) {
                this.done = true;
            }
        } else {
            // clockwise
            context.turtle.angle -= dr;
            this.amount -= dr;
            if (this.amount <= 0) {
                this.done = true;
            }
        }

        return amount - dr;
    }
}