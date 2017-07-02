import Printable from "./Printable";

import "./globals";

declare global {
    function print(value: Printable): void;
    
    function askForNumber(prompt: string, cb: (value: number) => void): void;
    function askForString(prompt: string, cb: (value: string) => void): void;
    function askForBoolean(prompt: string, cb: (value: boolean) => void): void;
    
    function clear(): void;

    interface Function {
        name: string;
    }
    
}