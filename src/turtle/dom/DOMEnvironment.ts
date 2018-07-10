import { Command } from "../commands/Command";
import { CommandQueue } from "../commands/CommandQueue";
import { Context } from "../Context";
import { Turtle } from "../Turtle";
import { MoveToCommand } from "../commands/MoveToCommand";

export class DOMEnvironment {

    commands: CommandQueue = new CommandQueue();

    _el: HTMLCanvasElement;
    _gfx: CanvasRenderingContext2D;

    _onclick: (x: number, y: number) => void;

    private _ctx: Context;

    /**
     * The following flag keeps track of requests for render frames to avoid
     * multiple subsequent requests per frame.
     */
    private _renderRequested: boolean = false;
    private _activelyRendering: boolean = false;
    private _lastRenderedAt: number;
    
    constructor() {
        // TODO -- look for a canvas with an id
        // make that id a possible argument of the constructor
        // TODO -- listen on window resize
        this._el = document.createElement("canvas");
        document.getElementsByTagName("body")[0].appendChild(this._el);
        this._el.width = window.innerWidth;
        this._el.height = window.innerHeight;
        this._el.onclick = (e) => this._onclick ? this._onclick(e.offsetX, e.offsetY) : null;
        this._gfx = this._el.getContext("2d")!; // TODO: Error handling
        this._ctx = new Context(this._gfx, this.initTurtle(), 1);
        this.initGfx(this._gfx);
        this.emit(new MoveToCommand(this._el.width / 2, this._el.height / 2));
    }

    emit(command: Command): void {
        this.commands.enqueue(command);
        this.requestRender();
    }

    setOnClick(handler: (x: number, y: number) => void): void {
        this._onclick = handler;
    }

    render(timestamp: number): void {
        // Reset Render Frame Request Flag
        this._renderRequested = false;
        if (!this._activelyRendering) {
            this._activelyRendering = true;
            this._lastRenderedAt = timestamp;
        }

        let timeSlice = (timestamp - this._lastRenderedAt) * this._ctx.turtle.speed;
        this._lastRenderedAt = timestamp;

        // TODO: Notice there's some ugliness in not using this like a true queue...
        // We will want to take multiple actions on the current head until it is done.
        // Treating it like a pure queue is a little ugly because of this.
        while (timeSlice > 0 && this.commands.hasNext()) {
            timeSlice = this.commands.current().execute(this._ctx, timeSlice);
            if (this.commands.current().done) {
                this.commands.next();
            }
        }

        // See the note above
        if (!this.commands.isEmpty()) {
            this.requestRender();
        } else {
            this._activelyRendering = false;
        }
    }

    private initGfx(gfx: CanvasRenderingContext2D): void {
        gfx.fillStyle = "black";
        gfx.strokeStyle = "black";
    }

    private initTurtle(): Turtle {
        return new Turtle();
    }

    private requestRender(): void {
        if (!this._renderRequested) {
            this._renderRequested = true;
            requestAnimationFrame((timestamp) => this.render(timestamp));
        }
    }

}