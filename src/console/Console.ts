import Printable from "./Printable";

interface Console {
    print(s: Printable): void;
    image(url: string): void;
    promptNumber(prompt: string, cb: (value: number) => void): void;
    promptString(prompt: string, cb: (value: string) => void): void;
    promptBoolean(prompt: string, cb: (value: boolean) => void): void;
    clear(): void;
    error(e: Error): void;
}

export default Console;