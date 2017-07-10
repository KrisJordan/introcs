import ConsoleProvider from "./ConsoleProvider";
import Printable from "./Printable";

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

function clear(): void {
    ConsoleProvider.instance().clear();
}

function error(e: Error): void {
    ConsoleProvider.instance().error(e);
}

export = {
    print,
    image,
    clear,
    promptNumber,
    promptString,
    promptBoolean,
    error
};