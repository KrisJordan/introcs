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

function promptNumber(prompt: string): Promise<number> {
    return ConsoleProvider.instance().promptNumber(prompt);
}

function promptString(prompt: string): Promise<string> {
    return ConsoleProvider.instance().promptString(prompt);
}

function promptBoolean(prompt: string): Promise<boolean> {
    return ConsoleProvider.instance().promptBoolean(prompt);
}

function promptCSV<T>(prompt: string, classname: Classname<T>): Promise<T[]> {
    return ConsoleProvider.instance().promptCSV(prompt, classname);
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

export {
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