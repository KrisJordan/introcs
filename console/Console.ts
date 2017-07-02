import Printable from "./Printable";

interface Console {
    print(s: Printable): void;
    askForNumber(prompt: string, cb: (value: number) => void): void;
    askForString(prompt: string, cb: (value: string) => void): void;
    askForBoolean(prompt: string, cb: (value: boolean) => void): void;
    clear(): void;
}

export default Console;