import ConsoleProvider from "./ConsoleProvider";
import Console from "./Console";
import Printable from "./Printable";
import Classname from "./Classname";

function print(s: Printable): void {
    ConsoleProvider.instance().print(s);
}

function image(url: string): void {
    ConsoleProvider.instance().image(url);
}

function promptNumber(prompt: string, cb: (value: number) => void): void {
    ConsoleProvider.instance().promptNumber(prompt, cb);
}

function promptString(prompt: string, cb: (value: string) => void): void {
    ConsoleProvider.instance().promptString(prompt, cb);
}

function promptBoolean(prompt: string, cb: (value: boolean) => void): void {
    ConsoleProvider.instance().promptBoolean(prompt, cb);
}

function promptCSV<T>(prompt: string, classname: Classname<T>, cb: (value: T[]) => void): void {
    ConsoleProvider.instance().promptCSV(prompt, classname, cb);
}

function clear(): void {
    ConsoleProvider.instance().clear();
}

function random(floor: number, ceiling: number): number {
    return ConsoleProvider.instance().random(floor, ceiling);
}

function error(e: Error): void {
    ConsoleProvider.instance().error(e);
}

function setInterval(cb: () => void, duration: number): number {
    return ConsoleProvider.instance().setInterval(cb, duration);
}

function setConsole(console: Console): void {
    ConsoleProvider.setConsole(console);
}

export = {
    print,
    image,
    clear,
    random,
    promptNumber,
    promptString,
    promptBoolean,
    promptCSV,
    error,
    setInterval,
    setConsole
};