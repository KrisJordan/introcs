import { Command } from "./Command";
import { Context } from "../Context";

export class SpeedCommand extends Command {
    constructor(public speed: number) {
        super();
    }

    execute(context: Context, amount: number): number {
        context.turtle.speed = this.speed;
        this.done = true;
        return amount;
    }
}