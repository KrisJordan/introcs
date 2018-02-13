import Printable from "./Printable";
import Classname from "./Classname";
import { List } from "../list";

interface Console {
    print(s: Printable): void;
    image(url: string): void;
    promptNumber(prompt: string): Promise<number>;
    promptString(prompt: string): Promise<string>;
    promptBoolean(prompt: string): Promise<boolean>;
    csvToList<T>(prompt: string, classname: Classname<T>): Promise<List<T>>;
    csvToArray<T>(prompt: string, classname: Classname<T>): Promise<T[]>;
    clear(): void;
    random(floor: number, ceiling: number): number;
    setInterval(cb: () => void, duration: number): number;
    error(e: Error): void;
}

export default Console;