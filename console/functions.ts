import ConsoleProvider from "./ConsoleProvider";
import Printable from "./Printable";

function print(s: Printable): void {
    ConsoleProvider.instance().print(s);
}

function askForNumber(prompt: string, cb: (value: number) => void): void {
    ConsoleProvider.instance().askForNumber(prompt, cb);
}

function askForString(prompt: string, cb: (value: string) => void): void {
    ConsoleProvider.instance().askForString(prompt, cb);
}

function askForBoolean(prompt: string, cb: (value: boolean) => void): void {
    ConsoleProvider.instance().askForBoolean(prompt, cb);
}

function clear(): void {
    ConsoleProvider.instance().clear();
}

export = {print, clear, askForNumber, askForString, askForBoolean};