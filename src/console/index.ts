import "./style.css";
import Printable from "./Printable";
import Classname from "./Classname";

declare global {
    function print(value: Printable): void;
    function image(url: string): void;
    
    function promptNumber(prompt: string, cb: (value: number) => void): void;
    function promptString(prompt: string, cb: (value: string) => void): void;
    function promptBoolean(prompt: string, cb: (value: boolean) => void): void;
    function promptCSV<T>(prompt: string, classname: Classname<T>, cb: (value: T[]) => void): void;

    function clear(): void;

    function random(floor: number, ceiling: number): number;

    interface Function {
        name: string;
    }
}

import "./globals";