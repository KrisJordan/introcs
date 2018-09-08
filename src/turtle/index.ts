import "./style.css";

import { TurtleProvider } from "./TurtleProvider";
import { ForwardCommand } from "./commands/ForwardCommand";
import { TurnCommand } from "./commands/TurnCommand";
import { MoveToCommand } from "./commands/MoveToCommand";
import { TurnToCommand } from "./commands/TurnToCommand";
import { SpeedCommand } from "./commands/SpeedCommand";
import { BackwardCommand } from "./commands/BackwardCommand";
import { StrokeCommand } from "./commands/StrokeCommand";

export let forward = (amount: number): void => { 
    TurtleProvider.instance().emit(new ForwardCommand(amount));
};

export let backward = (amount: number): void => {
    TurtleProvider.instance().emit(new BackwardCommand(amount));
};

export let left = (angle: number): void => {
    TurtleProvider.instance().emit(new TurnCommand(angle));
};

export let right = (angle: number): void => {
    TurtleProvider.instance().emit(new TurnCommand(-angle));
};

export let moveTo = (x: number, y: number): void => {
    TurtleProvider.instance().emit(new MoveToCommand(x, y));
};

export let turnTo = (angle: number): void => {
    TurtleProvider.instance().emit(new TurnToCommand(angle));
}

export let setStroke = (stroke: string): void => {
    TurtleProvider.instance().emit(new StrokeCommand(stroke));
};

export let setSpeed = (speed: number): void => {
    TurtleProvider.instance().emit(new SpeedCommand(speed));
}

export let setOnClick = (handler: (x: number, y: number) => void) => {
    TurtleProvider.instance().setOnClick(handler);
};