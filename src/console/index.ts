import "./style.css";
import Printable from "./Printable";

declare global {
    function print(value: Printable): void;
    function image(url: string): void;
    
    function promptNumber(prompt: string, cb: (value: number) => void): void;
    function promptString(prompt: string, cb: (value: string) => void): void;
    function promptBoolean(prompt: string, cb: (value: boolean) => void): void;
    
    function clear(): void;

    interface Function {
        name: string;
    }
}

import "./globals";