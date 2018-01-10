import Printable from "./Printable";
import Classname from "./Classname";

interface Console {
    print(s: Printable): void;
    image(url: string): void;
    promptNumber(prompt: string): Promise<number>;
    promptString(prompt: string): Promise<string>;
    promptBoolean(prompt: string): Promise<boolean>;
    promptCSV<T>(prompt: string, classname: Classname<T>): Promise<T[]>;
    clear(): void;
    random(floor: number, ceiling: number): number;
    setInterval(cb: () => void, duration: number): number;
    error(e: Error): void;
}

export default Console;