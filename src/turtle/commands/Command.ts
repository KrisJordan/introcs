import { Context } from "../Context";

export abstract class Command {
    
    done: boolean = false;
    
    next: Command | null = null;

    /**
     * Given a context, carry out 
     * @param ctx 2d rendering context
     * @param amount amount of progress to be rendered in this tick. Always >= 0.
     * @returns amount of progress remaining in tick
     */
    abstract execute(context: Context, amount: number): number;

}